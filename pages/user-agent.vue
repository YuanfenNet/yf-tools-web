<script setup lang="ts">
import { type IResult, UAParser } from 'ua-parser-js'

const userAgentValue = ref('')
const userAgentResult = ref<IResult>()
const userAgentResultStr = computed(() => JSON.stringify(userAgentResult.value))
const parser = new UAParser()

useHead({
  title: 'User Agent 解析',
  meta: [
    {
      name: 'description',
      content: '在线解析 User Agent 字符串，获取浏览器、操作系统等信息',
    },
  ],
})

onMounted(() => {
  userAgentValue.value = navigator.userAgent
  parser.setUA(userAgentValue.value)
  userAgentResult.value = parser.getResult()
})

function onInpugChange() {
  parser.setUA(userAgentValue.value)
  userAgentResult.value = parser.getResult()
}
</script>

<template>
  <page header="User Agent 解析" class="page-user-agent-parser">
    <div class="user-agent-input">
      <div class="title">
        User Agent
      </div>
      <el-input
        v-model="userAgentValue"
        placeholder="请输入 User Agent 字符串，回车确认"
        @change="onInpugChange"
      />
    </div>

    <div v-if="userAgentResult?.ua" class="user-agent-result">
      <div class="title">
        解析结果
      </div>
      <json-viewer
        :json-string="userAgentResultStr"
        :sort="false"
        :preview-mode="true"
      />
    </div>
  </page>
</template>

<style lang="scss">
.page-user-agent-parser {
  .title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .user-agent-input {
    margin-bottom: 20px;
    input {
      font-size: 14px;
      font-family: var(--code-font-family);
    }
  }
  .json-viewer-wrapper {
    border: 1px solid var(--el-border-color);
    border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
  }
}
</style>
