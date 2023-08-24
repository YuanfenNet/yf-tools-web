<template>
    <div class="header-content">
        <NuxtLink to="/" class="left">
            <img src="/img/logo.svg" class="icon" />
            <div class="title">猿奋工具箱</div>
        </NuxtLink>
        <div class="right">
            <ThemeToggler
                aria-label="切换暗色主题"
                :aria-checked="isDark"
                @click="() => toggleDark()"
            />
            <div class="description">做精致好用的小工具</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const color = useColorMode()

const isDark = computed(() => {
    color.value === 'dark'
})

function toggleDark() {
    color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<style lang="scss">
@use '~/assets/scss/variables.scss' as *;

.header-content {
    padding: 10px;
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
        }
        .title {
            font-size: 20px;
            color: #fff;
            flex-shrink: 0;
            margin-right: 10px;
        }
    }
    .right {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        .description {
            font-size: 12px;
            color: #fff;
            margin-left: 20px;
        }
    }
}
</style>
