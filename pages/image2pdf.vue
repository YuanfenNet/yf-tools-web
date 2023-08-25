<template>
    <Page header="图片转 PDF" class="page-image2pdf">
        <ElRow class="controls-wrapper" justify="space-between" :gutter="20">
            <ElCol :xs="24" :sm="10" :lg="8">
                <div class="select-item">
                    <el-text class="mx-1">大小：</el-text>
                    <el-select v-model="pageFormat" placeholder="大小">
                        <el-option
                            v-for="item in pageFormatOptions"
                            :key="item.key"
                            :label="item.label"
                            :value="item"
                            :disabled="item.disabled"
                        />
                    </el-select>
                </div>
            </ElCol>
            <ElCol :xs="24" :sm="7" :lg="6">
                <div class="select-item">
                    <el-text class="mx-1">方向：</el-text>
                    <el-select v-model="pageOrientation" placeholder="方向" class="page-orientation-select">
                        <el-option
                            v-for="item in pageOrientationOptions"
                            :key="item.key"
                            :label="item.label"
                            :value="item"
                            :disabled="item.disabled"
                        />
                    </el-select>
                </div>
            </ElCol>
            <ElCol :xs="24" :sm="7" :lg="6">
                <div class="select-item">
                    <el-text class="mx-1">边距：</el-text>
                    <el-select v-model="pageMargin" placeholder="页面距" class="page-margin-select">
                        <el-option
                            v-for="item in pageMarginOptions"
                            :key="item.key"
                            :label="item.label"
                            :value="item"
                            :disabled="item.disabled"
                        />
                    </el-select>
                </div>
            </ElCol>
            <ElCol :xs="24" :sm="24" :lg="4">
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
import { jsPDF, jsPDFOptions } from 'jspdf'
import { Sortable } from 'sortablejs-vue3'
import type { SortableEvent } from 'sortablejs'
import type { UploadFile, UploadInstance } from 'element-plus'

type OptionType<T> = {
    key: string
    label: string
    value: T
    disabled?: boolean
}

const allPageFormats: Array<OptionType<number[] | undefined>> = [
    {
        key: 'page-format-auto',
        label: '自动 (和图片大小一致)',
        value: undefined,
    },
    {
        key: 'page-format-a3',
        label: 'A3 (420mm×297mm)',
        value: [420, 297],
    },
    {
        key: 'page-format-a4',
        label: 'A4 (297mm×210mm)',
        value: [297, 210],
    },
    {
        key: 'page-format-a5',
        label: 'A5 (210mm×148mm)',
        value: [210, 148],
    },
]

const allPageOrientations: Array<OptionType<jsPDFOptions['orientation']>> = [
    {
        key: 'page-orientation-auto',
        label: '自动',
        value: undefined,
    },
    {
        key: 'page-orientation-portrait',
        label: '纵向',
        value: 'portrait',
    },
    {
        key: 'page-orientation-landscape',
        label: '横向',
        value: 'landscape',
    },
]

const allPageMargins: Array<OptionType<number>> = [
    {
        key: 'page-margin-0',
        label: '无边距',
        value: 0,
    },
    {
        key: 'page-margin-5',
        label: '5mm',
        value: 5,
    },
    {
        key: 'page-margin-10',
        label: '10mm',
        value: 10,
    },
    {
        key: 'page-margin-15',
        label: '15mm',
        value: 15,
    },
    {
        key: 'page-margin-20',
        label: '20mm',
        value: 20,
    },
    {
        key: 'page-margin-25',
        label: '25mm',
        value: 25,
    },
    {
        key: 'page-margin-30',
        label: '30mm',
        value: 30,
    },
]

const pageFormatOptions = ref(allPageFormats)
const pageOrientationOptions = ref(allPageOrientations)
const pageMarginOptions = ref(allPageMargins)
const fileList = ref<Array<UploadFile>>([])
const uploadRef = ref<UploadInstance>()
const previewVisible = ref(false)
const initialPreviewIndex = ref(0)
const pageFormat = ref(allPageFormats.find((f) => f.key === 'page-format-a4')!)
const pageOrientation = ref(allPageOrientations.find((o) => o.key === 'page-orientation-auto')!)
const pageMargin = ref(allPageMargins.find((m) => m.key === 'page-margin-0')!)

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
    const pdfOptions: jsPDFOptions = {}
    const { width: firstImgWidth, height: firstImgHeight } = await getImageDimensions(fileList.value[0].url)

    if (pageFormat.value.key === 'page-format-auto') {
        // 自适应大小的情况，使用 px 和图片大小作为页面大小，自动方向
        pdfOptions.unit = 'px'
        pdfOptions.hotfixes = ['px_scaling']
        pdfOptions.format = [firstImgWidth, firstImgHeight]
        pdfOptions.orientation = getPageOrientation(pageOrientation.value.value, firstImgWidth, firstImgHeight)
    } else {
        // 固定页面大小
        pdfOptions.unit = 'mm'
        pdfOptions.format = pageFormat.value.value
        pdfOptions.orientation = getPageOrientation(pageOrientation.value.value, firstImgWidth, firstImgHeight)
    }
    const pdf = new jsPDF(pdfOptions)
    let isFirstPage = true
    for (const file of fileList.value) {
        const dataUrl = await getDataURL(file.raw)
        const { width: imgWidth, height: imgHeight } = await getImageDimensions(dataUrl)
        pdfOptions.orientation = getPageOrientation(pageOrientation.value.value, imgWidth, imgHeight)
        pdfOptions.format = pageFormat.value.value === undefined ? [imgWidth, imgHeight] : pdfOptions.format
        if (!isFirstPage) {
            pdf!.addPage(pdfOptions.format, pdfOptions.orientation)
        }
        const { offsetLeft, offsetTop, maxWidth, maxHeight } = getImageContainSize(
            pdfOptions.format!,
            pdfOptions.orientation,
            pageMargin.value.value,
            imgWidth,
            imgHeight
        )

        pdf!.addImage(dataUrl, offsetLeft, offsetTop, maxWidth, maxHeight)

        isFirstPage = false
    }
    pdf!.save()
}

function getPageOrientation(orientation: jsPDFOptions['orientation'], width: number, height: number): jsPDFOptions['orientation'] {
    if (!orientation) {
        return height > width ? 'portrait' : 'landscape'
    }
    return orientation
}

function getImageContainSize(
    format: Array<number>,
    orientation: jsPDFOptions['orientation'],
    margin: number,
    imgWidth: number,
    imgHeight: number
) {
    const pageContentWidth = (orientation === 'landscape' ? Math.max(...format) : Math.min(...format)) - 2 * margin
    const pageContentHeight = (orientation === 'landscape' ? Math.min(...format) : Math.max(...format)) - 2 * margin
    const pageAspectRatio = pageContentWidth / pageContentHeight
    const imgAspectRatio = imgWidth / imgHeight
    let maxWidth, maxHeight, offsetLeft, offsetTop

    if (pageAspectRatio >= imgAspectRatio) {
        maxHeight = pageContentHeight
        maxWidth = maxHeight * imgAspectRatio
        offsetLeft = (pageContentWidth - maxWidth) / 2 + margin
        offsetTop = margin
    } else {
        maxWidth = pageContentWidth
        maxHeight = maxWidth / imgAspectRatio
        offsetLeft = margin
        offsetTop = (pageContentHeight - maxHeight) / 2 + margin
    }
    return { offsetLeft, offsetTop, maxWidth, maxHeight }
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

watch(pageFormat, (newValue) => {
    if (newValue.key === 'page-format-auto') {
        pageOrientationOptions.value = allPageOrientations.map((o) => (o.key === 'page-orientation-auto' ? o : { ...o, disabled: true }))
        pageOrientation.value = allPageOrientations.filter((o) => o.key === 'page-orientation-auto')[0]
        pageMarginOptions.value = allPageMargins.map((o) => (o.key === 'page-margin-0' ? o : { ...o, disabled: true }))
        pageMargin.value = allPageMargins.filter((o) => o.key === 'page-margin-0')[0]
    } else {
        pageOrientationOptions.value = allPageOrientations
        pageMarginOptions.value = allPageMargins
    }
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
            .select-item {
                width: 100%;
                display: flex;
                align-items: center;
                .el-select {
                    flex: 1;
                }
            }
        }
    }
    .picture-thumbnail-box {
        width: 100%;
        height: 100%;
    }
}
</style>
