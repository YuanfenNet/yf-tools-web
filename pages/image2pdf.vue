<template>
    <Page header="图片转 PDF (WIP)" class="page-image2pdf">
        <ElRow class="controls-wrapper">
            <ElCol :xs="24" :sm="18">
                <el-text class="mx-1">纸张大小：</el-text>
                <el-select v-model="pageSize" placeholder="纸张大小">
                    <el-option v-for="item in pageSizes" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </ElCol>
            <ElCol :xs="24" :sm="6">
                <ElButton type="primary" round :disabled="!hasFile" @click="onStartClick">开始合成</ElButton>
            </ElCol>
        </ElRow>
        <el-upload
            ref="uploadRef"
            v-model:file-list="fileList"
            :auto-upload="false"
            :drag="!hasFile"
            :multiple="true"
            :show-file-list="false"
            accept="image/*"
            class="image-upload-wrapper"
            @preview="onPreview"
            @change="onUploadChange"
        >
            <template v-if="fileList.length === 0">
                <el-icon class="el-icon--upload"><ElIconUploadFilled /></el-icon>
                <div class="el-upload__text">
                    <div>将需要转换的图片拖到此处，或<em>点击此处上传</em></div>
                    <div class="el-upload__tip">图片不会上传至服务器，请放心使用</div>
                </div>
            </template>
            <template v-if="fileList.length > 0">
                <Sortable :list="fileList" item-key="uid" tag="div" class="el-upload-list el-upload-list--picture-card" @end="onSortEnd">
                    <template #item="{ element, index }">
                        <div class="el-upload-list__item" @click.stop="">
                            <img class="el-upload-list__item-thumbnail" :src="element.url" />
                            <span class="el-upload-list__item-actions">
                                <span class="el-upload-list__item-preview" @click="onPreview(element)">
                                    <ElIcon><ElIconZoomIn /></ElIcon>
                                </span>
                                <span class="el-upload-list__item-delete" @click="onRemove(element)">
                                    <ElIcon><ElIconDelete /></ElIcon>
                                </span>
                            </span>
                        </div>
                    </template>
                    <template #footer>
                        <div class="el-upload el-upload--picture-card">
                            <ElIcon><ElIconPlus /></ElIcon>
                        </div>
                    </template>
                </Sortable>
            </template>
        </el-upload>

        <ElImageViewer
            v-if="previewVisible"
            :url-list="previewImageUrlList"
            @close="previewVisible = false"
            :initial-index="initialPreviewIndex"
        />
    </Page>
</template>

<script setup lang="ts">
import { jsPDF } from 'jspdf'
import { Sortable } from 'sortablejs-vue3'
import type { SortableEvent } from 'sortablejs'
import type { UploadFile, UploadInstance } from 'element-plus'

const pageSizes = [
    {
        label: 'A4 (297mm×210mm)',
        value: 'A4',
    },
    {
        label: '自动 (和图片大小一致)',
        value: 'Auto',
    },
]
const fileList = ref<Array<UploadFile>>([])
const uploadRef = ref<UploadInstance>()
const previewVisible = ref(false)
const initialPreviewIndex = ref(0)
const pageSize = ref(pageSizes[0])

const hasFile = computed(() => {
    if (fileList.value.length > 0) {
        return true
    } else {
        return false
    }
})

const previewImageUrlList = computed(() => {
    return fileList.value.map((file) => {
        return file.url!
    })
})

async function onStartClick() {
    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [210, 297],
    })
    let pageNumber = 0
    for (const file of fileList.value) {
        if (pageNumber > 0) {
            pdf.addPage()
        }
        const dataUrl = await getDataURL(file.raw)
        pdf.addImage(dataUrl, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight())
        pageNumber += 1
    }
    pdf.save()
}

function onSortEnd(event: SortableEvent) {
    moveItemInArray(fileList.value, event.oldIndex!, event.newIndex!)
}

function onUploadChange() {
    console.log('onUploadChange')
}

function onPreview(file: UploadFile) {
    initialPreviewIndex.value = fileList.value.findIndex((f) => f.uid === file.uid)
    previewVisible.value = true
}

function onRemove(file: UploadFile) {
    const removeIndex = fileList.value.findIndex((f) => f.uid === file.uid)
    fileList.value.splice(removeIndex, 1)
}

function moveItemInArray<T>(array: T[], from: number, to: number): void {
    const item = array.splice(from, 1)[0]
    array.splice(to, 0, item)
}

watch(fileList, (newValue) => {
    newValue.forEach((file) => {
        if (!file.url) {
            file.url = URL.createObjectURL(file.raw!)
        }
    })
})

useHead({
    title: '图片转 PDF',
    meta: [
        {
            name: 'description',
            content: '在线图片转PDF格式，图片拼接PDF',
        },
    ],
})

onBeforeUnmount(() => {
    fileList.value.forEach(({ url }) => {
        if (url?.startsWith('blob:')) URL.revokeObjectURL(url)
    })
})
</script>

<style lang="scss">
.page-image2pdf {
    .controls-wrapper {
        display: flex;
        align-items: center;
        .el-col {
            margin-bottom: 20px;
            .el-button {
                width: 100%;
            }
        }
    }
    .picture-thumbnail-box {
        width: 100%;
        height: 100%;
    }
}
</style>
