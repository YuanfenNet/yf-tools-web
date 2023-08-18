<template>
    <codemirror
        :value="value"
        :options="options"
        placeholder="请在此输入 JSON 字符串"
        @input="handleCodeChange"
    />
</template>

<script setup lang="ts">
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-palenight.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/display/placeholder.js'

type Props = {
    value?: string
    options?: object
}

const props = withDefaults(defineProps<Props>(), {
    value: '',
    options: () => ({}),
})

const emit = defineEmits(['input'])

function handleCodeChange(value: string) {
    emit('input', value)
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
