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
                        <code-mirror v-model="jsonString"
                                     :options="codeMirrorOptions" />
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
                                     :json-string="jsonString"
                                     :sort="sort"
                                     :preview-mode="previewMode"
                                     :expand-depth="expandDepth" />
                    </drag-content>
                </drag-zone>
            </client-only>
        </el-card>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import JsonViewer from '@/components/json-viewer.vue'
import CodeMirror from '@/components/code-mirror.vue'

@Component({
    layout: 'full-width',
    components: { JsonViewer, CodeMirror }
})
export default class Json extends Vue {
    jsonString: any = ''
    sort: boolean = false
    previewMode: boolean = false
    expandDepth: number = 5
    visible: boolean = true

    head() {
        return {
            title: 'JSON 解析&格式化',
            meta: [{ hid: 'description', name: 'description', content: '猿奋小工具集：在线 JSON 解析&格式化' }]
        }
    }

    codeMirrorOptions: any = {
        tabSize: 2,
        mode: { name: 'javascript', json: true },
        lineNumbers: true,
        line: true,
        theme: 'material-palenight'
    }

    goBack() {
        this.$router.push('/')
    }

    handleExpandeDepthChange() {
        this.visible = false
        this.$nextTick(() => {
            this.visible = true
        })
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
        }
    }
}
@media only screen and (max-width: 700px) {
    .page-json {
        .zone {
            flex-direction: column;
            height: auto;
            .content {
                width: 100%;
                height: calc((100vh - 240px) / 2);
            }
        }
    }
}
</style>