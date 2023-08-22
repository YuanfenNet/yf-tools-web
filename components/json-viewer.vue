<template>
    <div class="json-viewer-wrapper">
        <vue-json-viewer
            v-show="jsonString.length > 0 && !errorMessage"
            :value="jsonData"
            :expand-depth="expandDepth"
            :sort="sort"
            :preview-mode="previewMode"
            :copyable="{ copyText: '复制', copiedText: '已复制', timeout: 2000 }"
            theme="json-theme"
        />
        <div v-if="jsonString.length > 0 && errorMessage" class="error-message">
            {{ errorMessage }}
        </div>
    </div>
</template>

<script setup lang="ts">
import jsonlint from 'jsonlint-mod'
import VueJsonViewer from 'vue-json-viewer/ssr'
import 'vue-json-viewer/style.css'

type Props = {
    jsonString?: string
    expandDepth?: number
    sort?: boolean
    previewMode?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    jsonString: '',
    expandDepth: 5,
    sort: false,
    previewMode: false,
})

const errorMessage = ref('')

const jsonData = computed(() => {
    try {
        errorMessage.value = ''
        return jsonlint.parse(props.jsonString)
    } catch (e: any) {
        errorMessage.value = e.message
        return e.message
    }
})
</script>

<style lang="scss">
.json-viewer-wrapper {
    flex: 1;
    overflow-y: auto;
    .json-theme {
        background: var(--el-card-bg-color);
        .jv-ellipsis {
            color: var(--el-color-info);
            background-color: var(--el-fill-color);
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
            color: var(--el-color-primary);
            font-size: 14px;
        }
        .jv-code {
            white-space: nowrap;
            color: var(--el-text-color-primary);
            font-size: 14px;
            font-weight: bold;
            line-height: 1.5em;
            font-family: var(--code-font-family);
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
    }
    .error-message {
        color: #f1592a;
        font-weight: bold;
        padding: 20px;
        font-family: var(--code-font-family);
        line-height: 1.5em;
        font-size: 14px;
        white-space: pre-line;
        word-wrap: break-word;
    }
}
</style>
