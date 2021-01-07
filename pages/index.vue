<template>
    <div class="body-content page-home">
        <el-card>
            <div slot="header"
                 class="card-header">
                <h4>工具列表</h4>
            </div>
            <el-row>
                <a class="btn-primary"
                   href="/json">JSON 解析&格式化</a>
                <a class="btn-primary"
                   href="/password">随机密码生成</a>
            </el-row>
        </el-card>
        <el-card>
            <div slot="header"
                 class="card-header">
                <h4>欢迎使用猿奋工具箱</h4>
            </div>
            <p>目前正在扩充小工具，致力于为开发者提供最好用的小工具。</p>
            <p>TODO：</p>
            <ul>
                <li><del>随机密码生成</del>(2020.12.20)</li>
                <li><del>JSON 解析&格式化</del>(2020.12.27)</li>
                <li>图片 base64 编码、解码</li>
                <li>二维码编码、解码、美化</li>
                <li>图片压缩</li>
                <li>天数计算器</li>
                <li>时间戳转换</li>
                <li>字体格式在线转换</li>
                <li>Crontab</li>
                <li>时间戳转换</li>
            </ul>
        </el-card>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
    head() {
        return {
            title: '猿奋工具箱',
            titleTemplate: '',
            meta: [
                { hid: 'description', name: 'description', content: '致力于做最好用的小工具，免费为广大开发者提供 JSON 解析&格式化、随机密码生成、图片 Base64 编码&解码等小工具。' }
            ]
        }
    }

    navigateTo(path: string) {
        this.$router.push(path)
    }
}
</script>

<style lang="scss">
@import '~/assets/variables.scss';

.page-home {
    .el-card {
        margin-bottom: 20px;
        .card-header {
            h4 {
                font-weight: bold;
            }
        }
        .el-card__body {
            padding: 15px;
        }
    }
    .btn-primary {
        border: 1px solid $color-main-p40;
        padding: 10px 20px;
        border-radius: 20px;
        background-color: $color-main-p10;
        font-size: 14px;
        line-height: 18px;
        display: inline-block;
        font-weight: 500;
        margin: 5px;
        &:hover {
            background: $color-main;
            border-color: $color-main;
            color: #fff;
            opacity: 1;
            transition: none;
        }
        &:active {
            background: #007373;
            border-color: #007373;
            color: #fff;
            outline: 0;
        }
    }
}
</style>
