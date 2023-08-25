<template>
    <Page header="图片转 PDF" class="page-image2pdf">
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
        >
            <template v-if="fileList.length === 0">
                <el-icon class="el-icon--upload"><ElIconUploadFilled /></el-icon>
                <div class="el-upload__text">
                    <div>将需要转换的图片拖到此处，或<em>点击此处上传</em></div>
                    <div class="el-upload__tip">图片不会上传至服务器，请放心使用</div>
                </div>
            </template>
            <template v-if="fileList.length > 0">
                <Sortable :list="sortedFileList" item-key="uid" tag="div" class="el-upload-list el-upload-list--picture-card">
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
import type { UploadFile, UploadInstance } from 'element-plus'

const fileList = ref<Array<UploadFile>>([])
const uploadRef = ref<UploadInstance>()
const previewVisible = ref(false)
const initialPreviewIndex = ref(0)
const hasFile = computed(() => {
    if (fileList.value.length > 0) {
        return true
    } else {
        return false
    }
})

const sortedFileList = computed(() => {
    return fileList.value.map((file) => {
        file.url = URL.createObjectURL(file.raw!)
        return file
    })
})

const previewImageUrlList = computed(() => {
    return fileList.value.map((file) => {
        return file.url!
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
    sortedFileList.value.forEach(({ url }) => {
        if (url?.startsWith('blob:')) URL.revokeObjectURL(url)
    })
})

function onPreview(file: UploadFile) {
    initialPreviewIndex.value = fileList.value.findIndex((f) => f.uid === file.uid)
    previewVisible.value = true
}

function onRemove(file: UploadFile) {
    const removeIndex = fileList.value.findIndex((f) => f.uid === file.uid)
    fileList.value.splice(removeIndex, 1)
}
</script>

<style lang="scss">
.page-image2pdf {
    .picture-thumbnail-box {
        width: 100%;
        height: 100%;
    }
}
</style>
