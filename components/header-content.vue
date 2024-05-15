<script setup lang="ts">
const color = useColorMode()

const isDark = computed(() => {
  return color.value === 'dark'
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="header-content">
    <NuxtLink to="/" class="left">
      <img src="/img/logo.svg" class="icon">
      <div class="title">
        猿奋工具箱
      </div>
    </NuxtLink>
    <div class="right">
      <div class="description">
        做精致好用的小工具
      </div>
      <a target="_blank" class="link-github" href="https://github.com/YuanfenNet/yf-tools-web">
        <span class="icon-github" />
      </a>
      <ThemeToggler aria-label="切换暗色主题" :aria-checked="isDark" @click="() => toggleDark()" />
    </div>
  </div>
</template>

<style lang="scss">
.header-content {
  padding: 0 10px;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    .icon {
      width: 24px;
      height: 24px;
      margin-right: 10px;
      border-radius: 50%;
      border: 1px solid var(--el-color-primary);
    }
    .title {
      font-size: 20px;
      color: var(--el-text-color-primary);
      flex-shrink: 0;
      margin-right: 10px;
      font-weight: bold;
    }
  }
  .right {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    .description {
      font-size: 12px;
      color: var(--el-text-color-primary);
      margin-right: 20px;
    }
    .link-github {
      width: 20px;
      height: 20px;
      margin-right: 20px;
      .icon-github {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: var(--el-text-color-primary);
        mask-image: url(@/assets/img/github.svg);
        mask-size: 100% 100%;
        mask-repeat: no-repeat;
      }
    }
  }
}
</style>
