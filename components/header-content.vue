<template>
    <div class="header-content">
        <NuxtLink to="/" class="left">
            <img src="~/public/img/logo.svg" class="icon" />
            <div class="title">猿奋工具箱</div>
        </NuxtLink>
        <div class="description">做最好用的小工具</div>
    </div>
</template>

<style lang="scss">
@import '~/assets/variables.scss';
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

    .description {
        font-size: 12px;
        color: #fff;
    }
}
</style>
