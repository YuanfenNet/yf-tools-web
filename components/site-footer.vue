<template>
    <div class="footer">
        <slot />
        <div :style="{ display: 'none' }">
            Powered by
            <a href="https://www.yuanfen.net/">猿奋网络</a>
        </div>
    </div>
</template>

<style lang="scss">
.footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
