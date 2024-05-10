<script setup lang="ts">
import { Codemirror } from 'vue-codemirror'
import { EditorView } from 'codemirror'
import { HighlightStyle, codeFolding, syntaxHighlighting } from '@codemirror/language'
import { tags } from '@lezer/highlight'
import { json } from '@codemirror/lang-json'

definePageMeta({ layout: 'full-width' })

const customTheme = EditorView.theme({
  '&': {
    color: 'var(--el-text-color-primary)',
    backgroundColor: 'var(--el-bg-color-overlay)',
  },
  '.cm-content': {
    caretColor: 'var(--el-text-color-primary)',
  },
  '.cm-cursor, .cm-dropCursor': {
    borderLeftColor: 'var(--el-text-color-primary)',
  },
  '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
    backgroundColor: '#f8e3c5',
  },

  '.cm-searchMatch': {
    backgroundColor: '#f3d19e',
    outline: '1px solid var(--el-color-warning)',
  },
  '.cm-searchMatch.cm-searchMatch-selected': {
    backgroundColor: '#f3d19e',
  },
  '.cm-activeLine': {
    backgroundColor: '#00808020',
  },
  '.cm-selectionMatch': { backgroundColor: '#f3d19e' },
  '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
    backgroundColor: 'var(--el-color-primary-light-5)',
  },
  '.cm-gutters': {
    color: 'var(--el-text-color-regular)',
    backgroundColor: 'var(--el-fill-color)',
    borderColor: 'var(--el-border-color-light)',
  },
  '.cm-activeLineGutter': {
    color: 'var(--el-color-white)',
    backgroundColor: 'var(--el-color-primary)',
  },
  '.cm-foldPlaceholder': {
    backgroundColor: 'var(--el-fill-color)',
    border: 'none',
    color: 'var(--el-color-info)',
  },
})

const customHighlightStyle = HighlightStyle.define([
  { tag: tags.keyword, color: '#fc6' },
  { tag: tags.number, color: '#25aae2' },
  { tag: tags.bool, color: '#f98280' },
  { tag: tags.list, color: '#525252' },
  { tag: tags.string, color: '#3ab54a' },
  { tag: tags.null, color: '#f1592a' },
  { tag: tags.propertyName, color: '#92278f' },
  { tag: tags.comment, color: '#f5d', fontStyle: 'italic' },
])

useHead({
  title: 'JSON 解析&格式化',
  meta: [
    {
      name: 'description',
      content: '在线 JSON 解析&格式化小工具，支持解析和校验 JSON 数据、树形结构格式化、调整默认展开层级、字段排序等功能。',
    },
  ],
})

const codemirrorExtensions = [json(), syntaxHighlighting(customHighlightStyle), codeFolding({ placeholderText: '...' }), customTheme]

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

<template>
  <page header="JSON 解析&格式化" class="page-json">
    <div class="zone">
      <div class="content">
        <Codemirror v-model="jsonString" :style="{ height: '100%' }" :autofocus="true" :extensions="codemirrorExtensions" />
      </div>
      <div class="handle" />
      <div class="content right">
        <div class="toolbox">
          <div class="slider">
            <span class="text">展开层级</span>
            <el-slider v-model="expandDepth" :min="1" :max="10" @change="handleExpandeDepthChange" />
            <span class="text">{{ expandDepth }}级</span>
          </div>
          <el-checkbox v-model="sort">
            排序
          </el-checkbox>
          <el-checkbox v-model="previewMode">
            预览
          </el-checkbox>
        </div>
        <json-viewer
          v-if="visible"
          :json-string="jsonString"
          :sort="sort"
          :preview-mode="previewMode"
          :expand-depth="expandDepth"
        />
      </div>
    </div>
  </page>
</template>

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

    .v-codemirror {
      .cm-scroller {
        font-family: var(--code-font-family);
        font-size: 14px;
      }
    }
    .handle {
      width: 1px;
      background-color: var(--el-border-color-light);
    }
    .content {
      width: calc((100% - 1px) / 2);
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      justify-content: stretch;

      .toolbox {
        padding: 5px 15px;
        border-bottom: 1px solid var(--el-border-color-light);
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
            color: var(--el-text-color-regular);
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
