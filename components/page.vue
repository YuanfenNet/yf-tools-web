<script setup lang="ts">
defineProps<{
  header: string
}>()

const router = useRouter()

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="body-content">
    <el-card>
      <template #header>
        <div class="card-header">
          <el-page-header title="返回" :content="header" @back="goBack" />
        </div>
      </template>
      <div class="content-wrapper">
        <slot />
      </div>
    </el-card>
  </div>
</template>

<style lang="scss">
.body-content {
  .content-wrapper {
    & > h4:first-child {
      margin-top: 0 !important;
    }
    h4 {
      font-weight: bold;
      margin: 20px 0;
    }
  }
}
</style>
