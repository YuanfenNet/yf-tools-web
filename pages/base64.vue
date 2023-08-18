<template>
    <page header="Base64 编码&解码" class="page-base64">
        <div class="left-area">
            <div class="top-line">
                <div class="label">数据类型</div>
                <el-select v-model="type" placeholder="请选择" size="mini">
                    <el-option
                        v-for="item in types"
                        :key="item.value"
                        :value="item.value"
                        :label="item.label"
                    />
                </el-select>
            </div>
            <el-input v-if="type === 'text'" v-model="text" type="textarea" placeholder="" />
            <el-upload
                v-if="type === 'image' && !currentImage"
                :auto-upload="false"
                :show-file-list="false"
                :on-change="imageUpload"
                action=""
                accept="image/*"
                class="image-upload-wrapper"
                drag
            >
                <i class="el-icon-upload" />
                <div class="el-upload__text">
                    <div>将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip">图片不会上传至服务器，请放心使用</div>
                </div>
            </el-upload>
            <div
                v-if="type === 'image' && currentImage"
                class="image-preview"
                :style="{ backgroundImage: `url(${currentImage})` }"
            />
        </div>
        <div class="center-area">
            <el-button type="primary" round @click="encode">
                <i class="el-icon-arrow-right el-icon--left" />
                <span>编码</span>
                <i class="el-icon-arrow-right el-icon--right" />
            </el-button>
            <el-button type="primary" round @click="decode">
                <i class="el-icon-arrow-left el-icon--left" />
                <span>解码</span>
                <i class="el-icon-arrow-left el-icon--right" />
            </el-button>
            <el-button type="primary" round @click="clear">
                <span>清空</span>
            </el-button>
        </div>
        <div class="right-area">
            <div class="top-line">
                <div class="label">Base64</div>
            </div>
            <el-input v-model="base64" type="textarea" placeholder="" />
        </div>
    </page>
</template>

<script setup lang="ts">
import { Base64 } from 'js-base64'
import Utils from '@/plugins/utils'
import Page from '@/components/page.vue'

interface DataType {
    value: string
    label: string
}

definePageMeta({ layout: 'full-width' })

useHead({
    title: 'Base64 编码&解码',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: '在线 Base64 编码&解码小工具，支持文本和图片的 Base64 编码和解码',
        },
    ],
})

const types: Array<DataType> = [
    { value: 'text', label: '文本' },
    { value: 'image', label: '图片' },
]

const type = ref<string>('text')
const text = ref<string>('')
const base64 = ref<string>('')
const currentImage = ref<string>('')

function encode() {
    if (type.value === 'text') {
        base64.value = Base64.encode(text.value)
    } else if (type.value === 'image') {
        base64.value = currentImage.value
    }
}

function decode() {
    try {
        if (type.value === 'text') {
            text.value = Base64.decode(base64.value)
        } else if (type.value === 'image') {
            currentImage.value = base64.value
        }
    } catch (ex) {
        ElMessage.error('Base64 解码失败')
    }
}

function imageUpload(file: any) {
    Utils.getDataURL(file.raw).then((res) => {
        currentImage.value = res
    })
}

function clear() {
    text.value = ''
    base64.value = ''
    currentImage.value = ''
}
</script>

<style lang="scss">
.page-base64 {
    .content-wrapper {
        display: flex;
        align-items: stretch;
        .left-area,
        .right-area {
            flex: 1;
            display: flex;
            flex-direction: column;
            height: calc(100vh - 240px);
            input {
                width: 120px;
            }
            .el-textarea {
                flex: 1;
                textarea {
                    resize: none;
                    height: 100%;
                }
            }

            .top-line {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                height: 30px;
                .label {
                    font-size: 14px;
                    margin-right: 10px;
                    font-weight: bold;
                }
            }

            .image-upload-wrapper {
                flex: 1;
                .el-upload {
                    width: 100%;
                    height: 100%;
                    .el-upload-dragger {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        .el-icon-upload {
                            margin-top: 0;
                        }
                    }
                }
            }
            .image-preview {
                flex: 1;
                border: 1px solid #dcdfe6;
                border-radius: 4px;
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
            }
        }
        .center-area {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 200px;
            padding: 0 20px;
            .el-button {
                margin: 20px 0;
                width: 100%;
            }
        }
    }
}
</style>
