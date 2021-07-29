<template>
    <codemirror
        :value="value"
        :options="options"
        placeholder="请在此输入 JSON 字符串"
        @input="handleCodeChange"
    />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-palenight.css'
if (process.client) {
    require('codemirror/mode/javascript/javascript.js')
    require('codemirror/addon/display/placeholder.js')
}

@Component({})
export default class CodeMirror extends Vue {
    @Prop({ default: '' })
    value!: string

    @Prop({})
    options!: object

    handleCodeChange(value: string) {
        this.$emit('input', value)
    }
}
</script>

<style lang="scss">
.vue-codemirror {
    height: 100%;
    .CodeMirror {
        height: 100%;
        font-family: Menlo, Consolas, Courier Prime, monospace;
        font-size: 14px;
        line-height: 1.5em;
        pre.CodeMirror-placeholder {
            font-size: 14px;
        }
    }
}
</style>
