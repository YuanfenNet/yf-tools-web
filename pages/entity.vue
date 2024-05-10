<script setup lang="ts">
import HtmlEntities from '@/constants/html-entities'

interface HtmlSymbol {
  codepoint: number
  entity: string
  character: string
  htmlCode: string
  unicode: string
}

useHead({
  title: 'HTML 实体转换',
  meta: [
    {
      name: 'description',
      content: '在线 HTML 实体转换小工具，支持各种字符与 HTML 实体之间的相互转换；HTML 特殊字符转义',
    },
  ],
})

const character = ref<string>('')
const entity = ref<string>('')
const tableData = ref<Array<any>>([])

const entities = computed<Array<HtmlSymbol>>(() => {
  const results: Array<HtmlSymbol> = []
  Object.keys(HtmlEntities).forEach((key) => {
    if (key.indexOf(';') > 0 && HtmlEntities[key].codepoints.length === 1) {
      results.push({
        codepoint: HtmlEntities[key].codepoints[0],
        entity: key,
        character: HtmlEntities[key].character,
        htmlCode: `&#${HtmlEntities[key].codepoints[0]};`,
        unicode: `U+${HtmlEntities[key].codepoints[0].toString(16).toUpperCase().padStart(4, '0')}`,
      })
    }
  })
  results.sort((a, b) => {
    if (a.codepoint !== b.codepoint) {
      return a.codepoint - b.codepoint
    }
    else if (a.entity !== b.entity) {
      return a.entity < b.entity ? 1 : -1
    }

    return 0
  })
  return results
})

onMounted(() => {
  entities.value.forEach((entity) => {
    tableData.value.push(entity)
  })
})

function onCharacterInput() {
  entity.value = ''
  if (character.value.length === 1) {
    onButtonClick()
  }
}

function onEntityInput() {
  character.value = ''
  if (entity.value.endsWith(';')) {
    onButtonClick()
  }
}

function onButtonClick() {
  if (entity.value !== '') {
    const result = entities.value.find((e) => e.entity === entity.value)
    if (result) {
      character.value = result.character
    }
    else {
      ElMessage.warning('未找到结果！')
    }
  }
  else if (character.value !== '') {
    const result = entities.value.find((e) => e.character === character.value)
    if (result) {
      entity.value = result.entity
    }
    else {
      ElMessage.warning('未找到结果！')
    }
  }
  else {
    ElMessage.error('字符和 HTML 实体均为空！')
  }
}
</script>

<template>
  <page header="HTML 实体转换" class="page-entity">
    <h4>简介</h4>
    <div class="notecard">
      <p>
        <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Entity" target="_blank"> HTML 实体</a>是一段以连字号（<code>&</code>）开头、以分号（<code>;</code>）结尾的文本（字符串）。实体常常用于显示保留字符（这些字符会被解析为
        HTML 代码）和不可见的字符（如“不换行空格”）。你也可以用实体来代替其他难以用标准键盘键入的字符。
      </p>
      <p>
        很多字符都有易于记忆的实体，例如版权符号 (©) 的实体是
        <code>&amp;copy;</code>。另外有些字符会有多个对应实体。
      </p>
      <p>
        注：实体字符串区分大小写；空格键对应的 Unicode 编码是
        <code>U+0020</code>，因此无法搜索出 <code>&amp;nbsp;</code> 对应的 <code>U+00A0</code>。
      </p>
    </div>
    <h4>自动转换</h4>
    <el-row :gutter="20">
      <el-col :span="10">
        <el-input v-model="character" :maxlength="1" placeholder="请输入符号" @input="onCharacterInput" />
      </el-col>
      <el-col :span="4">
        <el-button
          :style="{ width: '100%' }"
          :disabled="entity === '' && character === ''"
          type="primary"
          round
          @click="onButtonClick"
        >
          转换
        </el-button>
      </el-col>
      <el-col :span="10">
        <el-input v-model="entity" placeholder="请输入实体" @input="onEntityInput" />
      </el-col>
    </el-row>

    <h4>对照表</h4>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="character" label="符号" width="180" />
      <el-table-column prop="entity" label="实体" width="180" />
      <el-table-column prop="htmlCode" label="HTML 代码" />
      <el-table-column prop="unicode" label="Unicode" />
    </el-table>
  </page>
</template>

<style lang="scss">
.page-entity {
  .el-table__body-wrapper,
  input {
    font-family: var(--code-font-family);
  }
}
</style>
