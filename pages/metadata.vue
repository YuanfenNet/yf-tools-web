<script setup lang="ts">
import MediaInfoFactory from 'mediainfo.js'
import type { MediaInfo, MediaInfoType, MediaType, ReadChunkFunc } from 'mediainfo.js'
import type { UploadInstance, UploadRawFile } from 'element-plus'

const metadata = ref<MediaType>()
const uploadRef = ref<UploadInstance>()
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
  if (!mediaInfo) {
    mediaInfo = await MediaInfoFactory({
      locateFile: () => '/mediainfo.js@0.2.2/MediaInfoModule.wasm',
    })
  }
  getMetadata(mediaInfo, file.raw).then((result: MediaInfoType) => {
    metadata.value = result.media
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
          图片不会上传至服务器，请放心使用
        </div>
      </div>
    </el-upload>
    <div v-if="metadata" class="metadata-result">
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
}
</style>
