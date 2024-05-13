<script setup lang="ts">
import { Base64 } from 'js-base64'

interface DataType {
  value: string
  label: string
}

definePageMeta({ layout: 'full-width' })

useHead({
  title: 'Base64 编码&解码',
  meta: [
    {
      name: 'description',
      content: '在线 Base64 编码&解码小工具，支持文本和图片的 Base64 编码和解码',
    },
  ],
})

const types: Array<DataType> = [
  { value: 'text', label: '文本' },
  { value: 'image', label: '图片' },
]

const type = ref('text')
const text = ref('')
const base64 = ref('')
const currentImage = ref('')

function encode() {
  if (type.value === 'text') {
    base64.value = Base64.encode(text.value)
  }
  else if (type.value === 'image') {
    base64.value = currentImage.value
  }
}

function decode() {
  try {
    if (type.value === 'text') {
      text.value = Base64.decode(base64.value)
    }
    else if (type.value === 'image') {
      currentImage.value = base64.value
    }
  }
  catch (ex) {
    ElMessage.error('Base64 解码失败')
  }
}

function imageUpload(file: any) {
  getDataURL(file.raw).then((res) => {
    currentImage.value = res
  })
}

function clear() {
  text.value = ''
  base64.value = ''
  currentImage.value = ''
}
</script>

<template>
  <page header="Base64 编码&解码" class="page-base64">
    <div class="left-area">
      <div class="top-line">
        <div class="label">
          数据类型
        </div>
        <el-select v-model="type" placeholder="请选择">
          <el-option v-for="item in types" :key="item.value" :value="item.value" :label="item.label" />
        </el-select>
      </div>
      <el-input v-if="type === 'text'" v-model="text" type="textarea" placeholder="" />
      <el-upload
        v-if="type === 'image' && !currentImage"
        :auto-upload="false"
        :show-file-list="false"
        :on-change="imageUpload"
        action=""
        accept="image/*"
        class="image-upload-wrapper"
        drag
      >
        <el-icon class="el-icon--upload">
          <ElIconUploadFilled />
        </el-icon>
        <div class="el-upload__text">
          <div>将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip">
            图片不会上传至服务器，请放心使用
          </div>
        </div>
      </el-upload>
      <div v-if="type === 'image' && currentImage" class="image-preview" :style="{ backgroundImage: `url(${currentImage})` }" />
    </div>
    <div class="center-area">
      <el-button type="primary" round @click="encode">
        <ElIcon><ElIconArrowRight /></ElIcon>
        <span>编码</span>
        <ElIcon><ElIconArrowRight /></ElIcon>
      </el-button>
      <el-button type="primary" round @click="decode">
        <ElIcon><ElIconArrowLeft /></ElIcon>
        <span>解码</span>
        <ElIcon><ElIconArrowLeft /></ElIcon>
      </el-button>
      <el-button type="primary" round @click="clear">
        <span>清空</span>
      </el-button>
    </div>
    <div class="right-area">
      <div class="top-line">
        <div class="label">
          Base64
        </div>
      </div>
      <el-input v-model="base64" type="textarea" placeholder="" />
    </div>
  </page>
</template>

<style lang="scss">
.page-base64 {
  .content-wrapper {
    min-width: 900px;
    display: flex;
    align-items: stretch;
    .left-area,
    .right-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: calc(100vh - 240px);
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
      }

      .image-upload-wrapper {
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
      .image-preview {
        flex: 1;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
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
        span {
          margin: 0 6px;
        }
      }
    }
  }
}
</style>
