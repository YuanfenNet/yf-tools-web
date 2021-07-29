<template>
    <div class="header-content">
        <div class="left">
            <img src="~/static/img/logo.svg" class="icon" />
            <div class="title">猿奋工具箱</div>
        </div>
        <div class="description">做最好用的小工具</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class HeaderContent extends Vue {}
</script>

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
