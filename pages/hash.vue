<script setup lang="ts">
import CryptoJS from 'crypto-js'
import HashType from '@/enums/hash-type'

interface OptionType {
  value: string
  label: string
}

definePageMeta({ layout: 'full-width' })

useHead({
  title: '哈希值计算',
  meta: [
    {
      name: 'description',
      content: '在线哈希值计算小工具，支持 MD5、SHA1 等常见哈希/散列算法',
    },
  ],
})

const DataType = {
  text: 'text',
  file: 'file',
}

const dataTypeOptions: Array<OptionType> = [
  { value: DataType.text, label: '文本' },
  { value: DataType.file, label: '文件' },
]

const hashTypes: Array<OptionType> = Object.keys(HashType).map((key) => {
  return { value: key, label: key.toUpperCase() }
})

const dataType = ref(DataType.text)
const hashType = ref(HashType.md5)
const text = ref('')
const hash = ref('')
const key = ref('')
const currentFile = ref<any>(null)
const calculateTime = ref(-1)

async function calculate() {
  const startTime = Date.now()
  let _text: CryptoJS.lib.WordArray | string = ''
  if (dataType.value === DataType.text) {
    _text = CryptoJS.enc.Utf8.parse(text.value)
  }
  else if (dataType.value === DataType.file) {
    hash.value = '计算中...'
    const base64 = await getBase64FromFile(currentFile.value)
    _text = CryptoJS.enc.Base64.parse(base64)
  }

  if (hashType.value) {
    const hashFunc = await getHashFunction(hashType.value)
    if (hashType.value.startsWith('hmac')) {
      hash.value = hashFunc(_text, key.value).toString()
    }
    else {
      hash.value = hashFunc(_text).toString()
    }
  }
  calculateTime.value = Date.now() - startTime
}

function fileUpload(file: any) {
  currentFile.value = file.raw
  calculate()
}

function onDataTypeChange() {
  text.value = ''
  hash.value = ''
  currentFile.value = ''
  calculateTime.value = -1
}

function clear() {
  text.value = ''
  hash.value = ''
  key.value = ''
  currentFile.value = ''
  calculateTime.value = -1
}
</script>

<template>
  <page header="哈希值计算" class="page-hash">
    <div class="left-area">
      <div class="top-line">
        <div class="label">
          数据类型
        </div>
        <el-select v-model="dataType" placeholder="请选择" @change="onDataTypeChange">
          <el-option v-for="item in dataTypeOptions" :key="item.value" :value="item.value" :label="item.label" />
        </el-select>
        <div class="label">
          哈希算法
        </div>
        <el-select v-model="hashType" placeholder="请选择" @change="calculate">
          <el-option v-for="item in hashTypes" :key="item.value" :value="item.value" :label="item.label" />
        </el-select>
      </div>
      <div v-if="hashType.startsWith('hmac')" class="top-line">
        <div class="label">
          密钥
        </div>
        <el-input v-model="key" placeholder="请输入密钥" @input="calculate" />
      </div>
      <el-input v-if="dataType === DataType.text" v-model="text" type="textarea" placeholder="" @input="calculate" />
      <el-upload
        v-if="dataType === DataType.file && !currentFile"
        :auto-upload="false"
        :show-file-list="false"
        :on-change="fileUpload"
        class="file-upload-wrapper"
        drag
      >
        <el-icon class="el-icon--upload">
          <ElIconUploadFilled />
        </el-icon>
        <div class="el-upload__text">
          <div>将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip">
            文件不会上传至服务器，请放心使用
          </div>
        </div>
      </el-upload>
      <div v-if="dataType === DataType.file && currentFile" class="file-preview">
        <div class="file-status">
          <el-icon class="el-icon--document">
            <ElIconDocument />
          </el-icon>
          <div class="file-name-row">
            <span class="file-name">{{ currentFile.name }}</span>
            <el-icon class="el-icon--upload-success">
              <ElIconCircleCheck />
            </el-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="center-area">
      <el-button type="primary" round @click="clear">
        <span>清空</span>
      </el-button>
    </div>
    <div class="right-area">
      <div class="top-line">
        <div class="label">
          <div>哈希值</div>
          <div v-if="calculateTime !== -1">
            (计算耗时: {{ calculateTime }} 毫秒)
          </div>
        </div>
      </div>
      <el-input v-model="hash" type="textarea" placeholder="" />
    </div>
  </page>
</template>

<style lang="scss">
.page-hash {
  .content-wrapper {
    min-width: 900px;
    display: flex;
    align-items: stretch;
    .left-area,
    .right-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: calc(100vh - 143px - var(--header-height) - var(--footer-height));
      input {
        width: 120px;
      }
      .el-textarea {
        flex: 1;
        textarea {
          resize: none;
          height: 100%;
        }
      }

      .top-line {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        height: 30px;
        .label {
          min-width: 60px;
          font-size: 14px;
          margin-right: 10px;
          font-weight: bold;
        }
        .el-input {
          width: auto;
          flex: 1;
          input {
            width: 100%;
          }
        }
        .el-select {
          flex: 1;
          &:not(:last-child) {
            margin-right: 20px;
          }
        }
      }

      .file-upload-wrapper {
        flex: 1;
        .el-upload {
          width: 100%;
          height: 100%;
          .el-upload-dragger {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .file-preview {
        flex: 1;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        .file-status {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 14px;

          .el-icon--document {
            font-size: 50px;
            color: var(--el-text-color-regular);
          }
          .file-name-row {
            display: flex;
            align-items: center;
            justify-content: center;
            .file-name {
              color: var(--el-text-color-regular);
              margin: 20px 10px;
            }
            .el-icon--upload-success {
              color: var(--el-color-success);
            }
          }
        }
      }
    }
    .center-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 200px;
      padding: 0 20px;
      .el-button {
        margin: 20px 0;
        width: 100%;
      }
    }
  }
}
</style>
utils/hash-type
