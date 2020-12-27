<template>
    <div class="body-content page-json">
        <el-card>
            <div slot="header"
                 class="card-header">
                <el-page-header title="返回"
                                content="JSON 解析&格式化"
                                @back="goBack">
                </el-page-header>
            </div>
            <client-only>
                <drag-zone class="zone">
                    <drag-content class="content">
                        <codemirror v-model="jsonDataString"
                                    placeholder="请在此输入 JSON 字符串"
                                    :options="cmOptions" />
                    </drag-content>
                    <drag-handle class="handle" />
                    <drag-content class="content right">
                        <div class="toolbox">
                            <div class="slider">
                                <span class="text">展开层级</span>
                                <el-slider v-model="expandDepth"
                                           :min="1"
                                           :max="10"
                                           @change="handleExpandeDepthChange">
                                </el-slider>
                                <span class="text">{{ expandDepth }}级</span>
                            </div>
                            <el-checkbox v-model="sort">排序</el-checkbox>
                            <el-checkbox v-model="previewMode">预览</el-checkbox>
                        </div>
                        <json-viewer v-if="visible"
                                     v-show="jsonDataString.length > 0 && !errorMessage"
                                     :value="jsonData"
                                     :expand-depth="expandDepth"
                                     :sort="sort"
                                     :preview-mode="previewMode"
                                     :copyable="{ copyText:'复制', copiedText:'已复制', timeout:2000 }"
                                     theme="json-theme" />
                        <div v-if="jsonDataString.length > 0 && errorMessage"
                             class="error-message">{{ errorMessage }}</div>
                    </drag-content>
                </drag-zone>
            </client-only>
        </el-card>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import jsonlint from 'jsonlint-mod'
import 'codemirror/theme/material-palenight.css'

@Component({
    layout: 'full-width'
})
export default class Json extends Vue {
    jsonDataString: any = ''
    sort: boolean = false
    previewMode: boolean = false
    expandDepth: number = 5
    visible: boolean = true
    errorMessage: string = ''
    cmOptions: any = {
        tabSize: 2,
        mode: { name: 'javascript', json: true },
        lineNumbers: true,
        line: true,
        theme: 'material-palenight'
    }

    get jsonData() {
        try {
            this.errorMessage = ''
            return jsonlint.parse(this.jsonDataString)
        } catch (e) {
            this.errorMessage = e.message
            return e.message
        }
    }

    goBack() {
        this.$router.push('/')
    }

    handleExpandeDepthChange(e: any) {
        this.visible = false
        this.$nextTick(() => {
            this.visible = true
        })
        console.log(e)
    }
}
</script>

<style lang="scss">
.page-json {
    .el-card__body {
        padding: 0;
    }
    .zone {
        width: 100%;
        height: calc(100vh - 240px);
        display: flex;
        justify-content: space-between;
        .handle {
            width: 5px;
            background: #eee;
        }
        .content {
            width: calc((100% - 5px) / 2);
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            justify-content: stretch;

            .toolbox {
                padding: 5px 15px;
                border-bottom: 1px solid #eee;
                display: flex;
                align-items: center;
                .el-checkbox {
                    margin-right: 10px;
                }

                .slider {
                    display: flex;
                    align-items: center;
                    width: 200px;
                    margin-right: 10px;
                    .text {
                        font-size: 14px;
                        color: #606266;
                        font-weight: 500;
                    }
                    .el-slider {
                        flex: 1;
                        margin: 0 10px;
                    }
                }
            }
            .json-input {
                width: 100%;
                min-height: 100%;
                padding: 20px;
                border: 0;
                border-radius: 0;
                outline: none;
                resize: none;
                font-family: Menlo, Courier Prime, monospace;
                line-height: 1.5em;
            }
            .error-message {
                color: #f1592a;
                font-weight: bold;
                padding: 20px;
                font-family: Menlo, Courier Prime, monospace;
                line-height: 1.5em;
                white-space: pre-line;
                word-wrap: break-word;
            }
            .vue-codemirror {
                height: 100%;
                .CodeMirror {
                    height: 100%;
                    pre.CodeMirror-placeholder {
                        font-size: 14px;
                    }
                }
            }
        }
    }

    .json-theme {
        background: #fff;
        white-space: nowrap;
        color: #525252;
        font-size: 14px;
        font-weight: bold;
        line-height: 1.5em;
        font-family: Menlo, Courier Prime, monospace;
        flex: 1;
        overflow-y: auto;

        .jv-ellipsis {
            color: #999;
            background-color: #eee;
            display: inline-block;
            line-height: 0.9;
            font-size: 0.9em;
            padding: 0px 4px 2px 4px;
            border-radius: 3px;
            vertical-align: 2px;
            cursor: pointer;
            user-select: none;
        }
        .jv-button {
            color: #49b3ff;
        }
        .jv-key {
            color: #92278f;
        }
        .jv-item {
            &.jv-array {
                color: #525252;
            }
            &.jv-boolean {
                color: #f98280;
            }
            &.jv-function {
                color: #067bca;
            }
            &.jv-number {
                color: #25aae2;
            }
            &.jv-number-float {
                color: #25aae2;
            }
            &.jv-number-integer {
                color: #25aae2;
            }
            &.jv-object {
                color: #525252;
            }
            &.jv-undefined {
                color: #f1592a;
            }
            &.jv-string {
                color: #3ab54a;
                word-break: break-word;
                white-space: normal;
            }
        }
        .jv-code {
            .jv-toggle {
                &:before {
                    padding: 0px 2px;
                    border-radius: 2px;
                }
                &:hover {
                    &:before {
                        background: #eee;
                    }
                }
            }
        }
    }
}
</style>