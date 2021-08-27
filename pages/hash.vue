<template>
    <page header="哈希值计算" class="page-hash">
        <div class="left-area">
            <div class="top-line">
                <div class="label">数据类型</div>
                <el-select
                    v-model="dataType"
                    placeholder="请选择"
                    size="mini"
                    @change="onDataTypeChange"
                >
                    <el-option
                        v-for="item in dataTypes"
                        :key="item.value"
                        :value="item.value"
                        :label="item.label"
                    />
                </el-select>
                <div class="label">哈希算法</div>
                <el-select v-model="hashType" placeholder="请选择" size="mini" @change="calculate">
                    <el-option
                        v-for="item in hashTypes"
                        :key="item.value"
                        :value="item.value"
                        :label="item.label"
                    />
                </el-select>
            </div>
            <div v-if="hashType.startsWith('hmac')" class="top-line">
                <div class="label">秘钥</div>
                <el-input v-model="key" placeholder="" size="mini" @input="calculate" />
            </div>
            <el-input
                v-if="dataType === DataType.text"
                v-model="text"
                type="textarea"
                placeholder=""
                @input="calculate"
            />
            <el-upload
                v-if="dataType === DataType.file && !currentFile"
                :auto-upload="false"
                :show-file-list="false"
                :on-change="fileUpload"
                action=""
                class="file-upload-wrapper"
                drag
            >
                <i class="el-icon-upload" />
                <div class="el-upload__text">
                    <div>将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip">文件不会上传至服务器，请放心使用</div>
                </div>
            </el-upload>
            <div v-if="dataType === DataType.file && currentFile" class="file-preview">
                <div class="file-status">
                    <i class="el-icon-document" />
                    <div class="file-name-row">
                        <span class="file-name">{{ currentFile.name }}</span>
                        <i class="el-icon-upload-success el-icon-circle-check" />
                    </div>
                </div>
            </div>
        </div>
        <div class="center-area">
            <el-button type="primary" round @click="clear">
                <span>清空</span>
            </el-button>
        </div>
        <div class="right-area">
            <div class="top-line">
                <div class="label">
                    <div>哈希值</div>
                    <div v-if="calculateTime !== -1">(计算耗时: {{ calculateTime }} 毫秒)</div>
                </div>
            </div>
            <el-input v-model="hash" type="textarea" placeholder="" />
        </div>
    </page>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import CryptoJS from 'crypto-js'
import Utils from '@/plugins/utils'
import { DataType, HashType } from '@/plugins/constants'
import Page from '@/components/page.vue'

interface OptionType {
    value: string
    label: string
}

@Component({
    layout: 'full-width',
    components: { Page },
})
export default class PageHash extends Vue {
    DataType = DataType
    HashType = HashType

    dataTypes: Array<OptionType> = [
        { value: DataType.text, label: '文本' },
        { value: DataType.file, label: '文件' },
    ]

    hashTypes: Array<OptionType> = Object.keys(HashType).map((key) => {
        return { value: key, label: key.toUpperCase() }
    })

    dataType: string = DataType.text
    hashType: string = HashType.md5
    text: string = ''
    hash: string = ''
    key: string = ''
    currentFile: any = null
    calculateTime?: number = -1

    head() {
        return {
            title: '哈希值计算',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '在线哈希值计算小工具，支持 MD5、SHA1 等常见哈希/散列算法',
                },
            ],
        }
    }

    mounted() {}

    async calculate() {
        const startTime = Date.now()
        let text: CryptoJS.lib.WordArray | string = ''
        if (this.dataType === DataType.text) {
            text = CryptoJS.enc.Utf8.parse(this.text)
        } else if (this.dataType === DataType.file) {
            this.hash = '计算中...'
            const base64 = await Utils.getBase64FromFile(this.currentFile)
            text = CryptoJS.enc.Base64.parse(base64)
        }

        if (this.hashType) {
            const func = require(`crypto-js/${this.hashType}.js`)
            if (this.hashType.startsWith('hmac')) {
                this.hash = func(text, this.key).toString()
            } else {
                this.hash = func(text).toString()
            }
        }
        this.calculateTime = Date.now() - startTime
    }

    fileUpload(file: any) {
        this.currentFile = file.raw
        this.calculate()
    }

    onDataTypeChange() {
        this.text = ''
        this.hash = ''
        this.currentFile = ''
        this.calculateTime = -1
    }

    clear() {
        this.text = ''
        this.hash = ''
        this.key = ''
        this.currentFile = ''
        this.calculateTime = -1
    }

    goBack() {
        this.$router.push('/')
    }
}
</script>

<style lang="scss">
.page-hash {
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
                    min-width: 60px;
                    font-size: 14px;
                    margin-right: 10px;
                    font-weight: bold;
                    display: flex;
                }
                .el-input {
                    width: auto;
                    flex: 1;
                    input {
                        width: 100%;
                    }
                }
                .el-select {
                    flex: 1;
                    &:not(:last-child) {
                        margin-right: 20px;
                    }
                }
            }

            .file-upload-wrapper {
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
            .file-preview {
                flex: 1;
                border: 1px solid #dcdfe6;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                .file-status {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;

                    .el-icon-document {
                        font-size: 50px;
                        color: #909399;
                    }
                    .file-name-row {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .file-name {
                            color: #606266;
                            margin: 20px 10px;
                        }
                        .el-icon-upload-success {
                            color: #67c23a;
                        }
                    }
                }
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
