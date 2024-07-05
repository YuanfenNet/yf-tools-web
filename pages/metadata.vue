<script setup lang="ts">
import MediaInfoFactory from 'mediainfo.js'
import type { Media, MediaInfo, MediaInfoResult, ReadChunkFunc } from 'mediainfo.js'
import type { UploadInstance, UploadRawFile } from 'element-plus'

const metadata = ref<Media>()
const uploadRef = ref<UploadInstance>()
const loading = ref(false)
let mediaInfo: MediaInfo

function getMetadata(mi: MediaInfo, file: File) {
  const getSize = () => file.size
  const readChunk: ReadChunkFunc = (chunkSize, offset) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target?.error) {
          reject(event.target.error)
        }
        resolve(new Uint8Array(event.target?.result as ArrayBuffer))
      }
      reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize))
    })

  return mi.analyzeData(getSize, readChunk)
}

function onExceed(files: any) {
  uploadRef.value!.clearFiles()
  const file = files[0] as UploadRawFile
  uploadRef.value!.handleStart(file)
}

async function mediaUpload(file: any) {
  loading.value = true
  if (!mediaInfo) {
    mediaInfo = await MediaInfoFactory({
      locateFile: () => '/mediainfo.js@0.3.1/MediaInfoModule.wasm',
    })
  }
  getMetadata(mediaInfo, file.raw).then((result: MediaInfoResult) => {
    metadata.value = result.media
    loading.value = false
  })
}

function objectToKeyValueArray(obj: { [key: string]: any }) {
  const result = Object.keys(obj).filter((key) => key !== 'extra' && key !== '@type').map((key) => ({ key, value: obj[key] }))

  if ('extra' in obj && typeof obj.extra === 'object') {
    Object.keys(obj.extra).forEach((key) => {
      result.push({ key, value: obj.extra[key] })
    })
  }

  return result
}

useHead({
  title: '媒体文件元数据解析',
  meta: [
    {
      name: 'description',
      content: '在线解析媒体文件元数据，无需上传文件，极速使用',
    },
  ],
})
</script>

<template>
  <page header="媒体文件元数据解析" class="page-metadata">
    <el-upload
      ref="uploadRef"
      :auto-upload="false"
      :show-file-list="true"
      :on-change="mediaUpload"
      :limit="1"
      accept="image/*,audio/*,video/*,.mkv"
      class="media-upload"
      drag
      @exceed="onExceed"
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
    <div v-if="!loading && metadata" class="metadata-result">
      <div v-for="track in metadata.track" :key="track['@type']" class="metadata-track">
        <h2 class="metadata-track-type">
          {{ track['@type'] }}
        </h2>
        <el-table
          :data="objectToKeyValueArray(track)"
          :show-header="false"
          class="metadata-track-table"
          stripe
        >
          <el-table-column prop="key" label="名称" />
          <el-table-column prop="value" label="值" />
        </el-table>
      </div>
    </div>
    <loader v-if="loading">
      <div class="loading-text">
        <div>解析中……</div>
        <div>通常在几秒内完成，部分文件需要解析较久</div>
      </div>
    </loader>
  </page>
</template>

<style lang="scss">
.page-metadata {
  .metadata-result {
    .metadata-track {
      .metadata-track-type {
        font-size: 20px;
        margin: 20px 0;
      }
      .metadata-track-table {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
  .loading-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 12px;
    color: var(--el-text-color-secondary);
    div {
      margin-top: 10px;
    }
  }
}
</style>
