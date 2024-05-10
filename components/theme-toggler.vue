<template>
  <ThemeSwitch>
    <ElIcon :size="13">
      <IconsDark class="dark-icon" />
      <IconsLight class="light-icon" />
    </ElIcon>
  </ThemeSwitch>
</template>

<style lang="scss" scoped>
.el-icon {
  cursor: pointer;
}

.dark-icon,
.light-icon {
  transition:
    color var(--el-transition-duration),
    opacity var(--el-transition-duration);
}

.light-icon {
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
}

.dark-icon {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}

@at-root .dark {
  .dark-icon {
    opacity: 1;
  }

  .light-icon {
    opacity: 0;
  }
}
</style>
