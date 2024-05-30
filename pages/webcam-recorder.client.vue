<script lang="ts" setup>
import { Combinator, fixFMP4Duration } from '@webav/av-cliper'
import { AVRecorder } from '@webav/av-recorder'

const videoRef = ref<HTMLVideoElement>()
const startButtonDisabled = ref(false)
const endButtonDisabled = ref(true)
const webcodecsSupported = ref(true)
let mediaStream: MediaStream
let recorder: AVRecorder | null = null
let recordedChunks: BlobPart[] = []
let reader: ReadableStreamDefaultReader<Uint8Array>
let writer: WritableStreamDefaultWriter<Uint8Array>
let outputStream: ReadableStream<Uint8Array>

useHead({
  title: '摄像头录制 MP4',
  meta: [
    {
      name: 'description',
      content: '在线调用系统摄像头录制 MP4 视频，基于 mediaDevices.getUserMedia 和 WebAV 库实现',
    },
  ],
})

async function onStartButtonClick() {
  const recodeMS = mediaStream.clone()
  recorder = new AVRecorder(recodeMS, {
    width: 1280,
    height: 720,
  })

  await recorder.start()

  startButtonDisabled.value = true
  endButtonDisabled.value = false

  outputStream = await fixFMP4Duration(recorder!.outputStream!)

  recordedChunks = []
  reader = outputStream.getReader()
  const writableStream = new WritableStream({
    write(chunk) {
      recordedChunks.push(chunk)
    },
  })
  writer = writableStream.getWriter()

  while (true) {
    const { done, value } = await reader.read()
    if (done) {
      break
    }
    await writer.write(value)
  }
  writer.close()
  const blob = new Blob(recordedChunks, { type: 'video/mp4' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = url
  a.download = 'recorded_video.mp4'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

async function onStopButtonClick() {
  recorder?.stop()
  startButtonDisabled.value = false
  endButtonDisabled.value = true
}

onMounted(async () => {
  webcodecsSupported.value = await Combinator.isSupported()
  if (!webcodecsSupported.value) {
    ElMessage.error('您的浏览器不支持 WebCodecs')
    return
  }

  mediaStream = await navigator.mediaDevices.getUserMedia({
    video: {
      width: { ideal: 1920, max: 3840 },
      height: { ideal: 1080, max: 2160 },
    },
    audio: true,
  })

  if (videoRef.value) {
    videoRef.value.srcObject = mediaStream
    videoRef.value.play()
  }
})
</script>

<template>
  <page header="摄像头录制 MP4" class="page-webcam-recorder">
    <div class="box-container">
      <div class="video-container">
        <video ref="videoRef" autoplay class="video" />
      </div>
      <div class="controls">
        <el-button :disabled="startButtonDisabled" type="primary" round @click="onStartButtonClick">
          开始录制
        </el-button>
        <el-button :disabled="endButtonDisabled" type="primary" round @click="onStopButtonClick">
          停止录制
        </el-button>
      </div>
    </div>
  </page>
</template>

<style lang="scss">
.box-container {
  display: flex;
  align-items: center;

  .video-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .video {
      width: 100%;
    }
    .canvas {
      width: 320px;
      height: 240px;
    }
  }
  .controls {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .el-button {
      margin: 10px 0;
    }
  }
}
</style>
