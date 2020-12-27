<template>
    <div class="json-viewer-wrapper">
        <vue-json-viewer v-show="jsonString.length > 0 && !errorMessage"
                         :value="jsonData"
                         :expand-depth="expandDepth"
                         :sort="sort"
                         :preview-mode="previewMode"
                         :copyable="{ copyText:'复制', copiedText:'已复制', timeout:2000 }"
                         theme="json-theme" />
        <div v-if="jsonString.length > 0 && errorMessage"
             class="error-message">{{ errorMessage }}</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import jsonlint from 'jsonlint-mod'
import VueJsonViewer from 'vue-json-viewer/ssr'
import 'vue-json-viewer/style.css'

@Component({ components: { VueJsonViewer } })
export default class JsonViewer extends Vue {
    @Prop({ default: '' })
    jsonString!: string

    @Prop({ default: 5 })
    expandDepth!: number

    @Prop({ default: false })
    sort!: boolean

    @Prop({ default: false })
    previewMode!: boolean

    errorMessage: string = ''

    get jsonData() {
        try {
            this.errorMessage = ''
            return jsonlint.parse(this.jsonString)
        } catch (e) {
            this.errorMessage = e.message
            return e.message
        }
    }
}
</script>

<style lang="scss">
.json-viewer-wrapper {
    flex: 1;
    overflow-y: auto;
    .json-theme {
        background: #fff;
        white-space: nowrap;
        color: #525252;
        font-size: 14px;
        font-weight: bold;
        line-height: 1.5em;
        font-family: Menlo, Courier Prime, monospace;

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
    .error-message {
        color: #f1592a;
        font-weight: bold;
        padding: 20px;
        font-family: Menlo, Courier Prime, monospace;
        line-height: 1.5em;
        white-space: pre-line;
        word-wrap: break-word;
    }
}
</style>