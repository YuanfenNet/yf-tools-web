<template>
    <page header="JSON 解析&格式化" class="page-json">
        <client-only>
            <drag-zone class="zone">
                <drag-content class="content">
                    <code-mirror v-model="jsonString" :options="codeMirrorOptions" />
                </drag-content>
                <drag-handle class="handle" />
                <drag-content class="content right">
                    <div class="toolbox">
                        <div class="slider">
                            <span class="text">展开层级</span>
                            <el-slider
                                v-model="expandDepth"
                                :min="1"
                                :max="10"
                                @change="handleExpandeDepthChange"
                            />

                            <span class="text">{{ expandDepth }}级</span>
                        </div>
                        <el-checkbox v-model="sort">排序</el-checkbox>
                        <el-checkbox v-model="previewMode">预览</el-checkbox>
                    </div>
                    <json-viewer
                        v-if="visible"
                        :json-string="jsonString"
                        :sort="sort"
                        :preview-mode="previewMode"
                        :expand-depth="expandDepth"
                    />
                </drag-content>
            </drag-zone>
        </client-only>
    </page>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'full-width' })

useHead({
    title: 'JSON 解析&格式化',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content:
                '在线 JSON 解析&格式化小工具，支持解析和校验 JSON 数据、树形结构格式化、调整默认展开层级、字段排序等功能。',
        },
    ],
})

const codeMirrorOptions = {
    tabSize: 2,
    mode: { name: 'javascript', json: true },
    lineNumbers: true,
    line: true,
    theme: 'material-palenight',
}

const jsonString = ref('')
const sort = ref(false)
const previewMode = ref(false)
const expandDepth = ref(5)
const visible = ref(true)

async function handleExpandeDepthChange() {
    visible.value = false
    await nextTick()
    visible.value = true
}
</script>

<style lang="scss">
.page-json {
    .el-card__body {
        padding: 0;
    }
    .zone {
        width: 100%;
        height: calc(100vh - 200px);
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
                height: calc(100vh - 180px);
            }
        }
    }
}
</style>
