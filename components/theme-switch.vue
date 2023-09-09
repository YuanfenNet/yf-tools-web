<script setup lang="ts">
// for now el-switch does not support customized icon in the dot
// we will implement a simple version of el-switch then update the switch
// component for this feature
</script>

<template>
    <button class="switch" role="switch">
        <div class="switch__action">
            <div class="switch__icon">
                <slot />
            </div>
        </div>
    </button>
</template>

<style lang="scss">
.switch {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid var(--el-border-color);
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: var(--bg-color-mute);
    cursor: pointer;
    transition:
        border-color var(--el-transition-duration),
        background-color var(--el-transition-duration);

    &:hover {
        border-color: var(--el-color-primary);
    }

    &__action {
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 50%;
        background-color: var(--el-bg-color);
        transform: translateX(0);
        color: var(--el-text-color-regular);
        transition:
            border-color var(--el-transition-duration),
            background-color var(--el-transition-duration),
            transform var(--el-transition-duration);

        .dark & {
            transform: translateX(20px);
        }
    }

    &__icon {
        position: relative;

        .el-icon {
            position: absolute;
            left: 1px;
            bottom: 1px;
        }
    }

    &__action,
    &__icon {
        width: 16px;
        height: 16px;
    }

    &:focus-visible {
        outline: -webkit-focus-ring-color auto 1px;
        outline-offset: 1px;
    }
}
</style>
