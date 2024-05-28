<script setup lang="ts">
import { DateTime } from 'luxon'

const dateTime = ref(DateTime.now().toJSDate())
const timestamp = ref('')
const isoString = ref('')
const realTime = ref(true)
const millisecond = ref(false)

useHead({
  title: '时间格式转换',
  meta: [
    {
      name: 'description',
      content: '在线时间格式转换小工具，支持时间戳与 ISO 8601 时间格式之间相互转换',
    },
  ],
})

onMounted(() => {
  updateTime()
})

function onInputFocus() {
  realTime.value = false
}

function updateTime() {
  if (realTime.value) {
    dateTime.value = DateTime.now().toJSDate()
    convertFromDateTime()
  }
  const timeInverval = millisecond.value ? 1 : 100
  setTimeout(() => {
    updateTime()
  }, timeInverval)
}

function convertFromDateTime() {
  if (dateTime.value) {
    if (millisecond.value) {
      timestamp.value = DateTime.fromJSDate(dateTime.value).toMillis().toString()
      isoString.value = DateTime.fromJSDate(dateTime.value).toISO() || ''
    }
    else {
      timestamp.value = Math.floor(DateTime.fromJSDate(dateTime.value).toSeconds()).toString()
      isoString.value = DateTime.fromJSDate(dateTime.value).toFormat('yyyy-MM-dd\'T\'HH:mm:ssZZ')
    }
  }
}

function convertDateTime() {
  realTime.value = false
  convertFromDateTime()
}

function convertTimestamp() {
  if (timestamp.value) {
    if (timestamp.value.toString().length === 13) {
      dateTime.value = DateTime.fromMillis(Number.parseInt(timestamp.value)).toJSDate()
    }
    else if (timestamp.value.toString().length === 10) {
      dateTime.value = DateTime.fromSeconds(Number.parseInt(timestamp.value)).toJSDate()
    }
    else {
      ElMessage.error('时间戳位数应为 10 位或 13位')
      return
    }
    convertFromDateTime()
  }
}

function convertIsoString() {
  if (isoString.value) {
    dateTime.value = DateTime.fromISO(isoString.value).toJSDate()
    convertFromDateTime()
  }
}
</script>

<template>
  <page header="时间格式转换" class="page-timestamp">
    <el-row align="middle">
      <el-col :span="4">
        <span class="line-title">选项：</span>
      </el-col>
      <el-col :span="20">
        <el-checkbox v-model="realTime">
          实时时间
        </el-checkbox>
        <el-checkbox v-model="millisecond">
          毫秒
        </el-checkbox>
      </el-col>
    </el-row>
    <el-row align="middle">
      <el-col :span="4">
        <span class="line-title">时间选择器：</span>
      </el-col>
      <el-col :span="14">
        <el-date-picker v-model="dateTime" type="datetime" placeholder="选择日期时间" @focus="onInputFocus" />
      </el-col>
      <el-col :span="5" :offset="1">
        <el-button type="primary" round @click="convertDateTime">
          转换
        </el-button>
      </el-col>
    </el-row>
    <el-row align="middle">
      <el-col :span="4">
        <span class="line-title">时间戳：</span>
      </el-col>
      <el-col :span="14">
        <el-input v-model="timestamp" @focus="onInputFocus" />
      </el-col>
      <el-col :span="5" :offset="1">
        <el-button type="primary" round @click="convertTimestamp">
          转换
        </el-button>
      </el-col>
    </el-row>
    <el-row align="middle">
      <el-col :span="4">
        <span class="line-title">ISO 8601：</span>
      </el-col>
      <el-col :span="14">
        <el-input v-model="isoString" @focus="onInputFocus" />
      </el-col>
      <el-col :span="5" :offset="1">
        <el-button type="primary" round @click="convertIsoString">
          转换
        </el-button>
      </el-col>
    </el-row>
  </page>
</template>

<style lang="scss">
.page-timestamp {
  h3 {
    font-weight: bold;
  }
  .el-row {
    margin-bottom: 20px;
    min-height: 40px;
  }
  .line-title {
    font-weight: bold;
  }
  .el-date-editor {
    width: 100%;
  }
  .el-button {
    margin: 0;
    width: 100%;
  }
  .text-center {
    text-align: center;
  }
  input {
    font-size: 16px;
    font-family: var(--code-font-family);
  }
}
</style>
