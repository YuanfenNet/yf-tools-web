<template>
    <div class="body-content page-base64">
        <el-card>
            <div slot="header" class="card-header">
                <el-page-header title="返回" content="Base64 编码&解码" @back="goBack" />
            </div>
            <div class="content-wrapper">
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
                    <el-input v-model="text" type="textarea" placeholder="" />
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
                </div>
                <div class="right-area">
                    <div class="top-line">
                        <div class="label">Base64</div>
                    </div>
                    <el-input v-model="base64" type="textarea" placeholder="" />
                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Base64 } from 'js-base64'

interface InputType {
    value: string
    label: string
}

@Component({
    layout: 'full-width',
})
export default class Password extends Vue {
    types: Array<InputType> = [
        { value: 'text', label: '文本' },
        { value: 'image', label: '图片' },
    ]

    type: string = 'text'
    text: string = ''
    base64: string = ''

    head() {
        return {
            title: 'Base64 编码&解码',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '在线 Base64 编码&解码小工具，支持文本和图片的 Base64 编码和解码',
                },
            ],
        }
    }

    mounted() {}

    encode() {
        this.base64 = Base64.encode(this.text)
    }

    decode() {
        try {
            this.text = Base64.decode(this.base64)
        } catch (ex) {
            this.$message.error('Base64 解码失败')
        }
    }

    goBack() {
        this.$router.push('/')
    }
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
                .label {
                    font-size: 14px;
                    margin-right: 10px;
                    font-weight: bold;
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
