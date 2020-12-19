<template>
    <div class="page">
        <div class="header">
            <el-row>
                <el-col :xs="{ span:24 }"
                        :sm="{ span:22, offset: 1 }"
                        :md="{ span:18, offset: 3 }">
                    <div class="header-content">
                        <div class="title">猿奋小工具集</div>
                        <div class="description">致力于为广大开发者提供最好用的小工具</div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="body-container">
            <el-row>
                <el-col :xs="{ span:24 }"
                        :sm="{ span:22, offset: 1 }"
                        :md="{ span:16, offset: 4 }"
                        :lg="{ span:12, offset: 6 }">
                    <Nuxt />
                </el-col>
            </el-row>
        </div>
        <vue-footer>
            <h6>Copyright ©
                <a href="https://www.yuanfen.net">猿奋网络</a>
                All rights reserved.
            </h6>
            <h6>
                <a target="_blank"
                   href="https://beian.miit.gov.cn">沪ICP备13002299号</a>
                <a target="_blank"
                   href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010602003297">
                    沪公网安备31010602003297号
                </a>
            </h6>
        </vue-footer>
    </div>
</template>

<style lang="scss">
$color-main: #c21734;
$color-main-p90: rgba(194, 23, 52, 0.9);
$color-main-p80: rgba(194, 23, 52, 0.8);
$color-main-p60: rgba(194, 23, 52, 0.6);
$color-title-black: rgba(10, 30, 60, 0.85);
$color-primary-text-black: rgba(10, 30, 60, 0.65);
$color-secondary-text-black: rgba(10, 30, 60, 0.45);
$color-disable-black: rgba(10, 30, 60, 0.25);
$color-border-black: rgba(10, 30, 60, 0.15);
$color-background-black: rgba(10, 30, 60, 0.09);
$color-title-white: rgba(255, 255, 255, 1);
$color-primary-text-white: rgba(255, 255, 255, 0.85);
$color-secondary-text-white: rgba(255, 255, 255, 0.65);
$color-disable-white: rgba(255, 255, 255, 0.45);
$color-border-white: rgba(255, 255, 255, 0.25);
$color-background-white: rgba(255, 255, 255, 0.09);
$footer-height: 60px;
$border: 1px solid $color-border-black;
$max-width-xs: 575.98px;
$max-width-sm: 767.98px;
$max-width-md: 991.98px;
$max-width-lg: 1199.98px;

html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}
.page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding-bottom: $footer-height;
    .header {
        width: 100%;
        border-bottom: $border;
        background-color: #409eff;
        .header-content {
            padding: 10px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .title {
                font-size: 24px;
                color: #fff;
            }
            .description {
                font-size: 12px;
                color: #fff;
                margin-top: 10px;
            }
        }
    }
    .body-container {
        width: 100%;
        padding: 20px 10px;
        .el-page-header__content {
            font-weight: bold;
        }
    }
    .footer {
        height: $footer-height;
        background-color: #35373b;
        flex-direction: column;
        h6 {
            color: $color-primary-text-white;
            padding: 0 10px;
            font-size: 12px;
            a {
                color: $color-primary-text-white;
                &:hover {
                    color: $color-primary-text-white;
                }
            }
        }
    }
}
a {
    color: $color-main;
    background-color: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
        opacity: 0.8;
    }
    &:active,
    &:hover {
        outline: 0;
        text-decoration: none;
    }
}

p {
    color: $color-primary-text-black;
    font-size: 14px;
    line-height: 22px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
    color: $color-title-black;
}

h1 {
    font-size: 38px;
    line-height: 46px;
}

h2 {
    font-size: 30px;
    line-height: 38px;
}

h3 {
    font-size: 20px;
    line-height: 28px;
}

h4 {
    font-size: 16px;
    line-height: 24px;
}

h5 {
    font-size: 14px;
    line-height: 22px;
}

h6 {
    font-size: 12px;
    line-height: 20px;
}

hr {
    height: 1px;
    border: none;
    border-top: $border;
    margin: 80px 0 0 0;
}

.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}
</style>
