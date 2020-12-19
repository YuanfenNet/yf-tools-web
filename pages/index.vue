<template>
    <div class="body-content page-home">
        <el-card>
            <div slot="header"
                 class="card-header">
                <h4>欢迎使用猿奋小工具集</h4>
            </div>
            <p>
                目前正在扩充小工具，致力于为开发者提供最好用的工具集。
            </p>
        </el-card>
        <el-card>
            <div slot="header"
                 class="card-header">
                <h4>工具列表</h4>
            </div>
            <el-row>
                <el-button round
                           type="primary"
                           plain
                           @click="navigateTo('/password')">随机密码生成</el-button>
            </el-row>
        </el-card>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
    head() {
        return {
            title: '猿奋小工具集',
            titleTemplate: ''
        }
    }

    navigateTo(path: string) {
        this.$router.push({
            path: path
        })
    }
}
</script>

<style lang="scss">
.page-home {
    .el-card {
        margin-bottom: 20px;
        .card-header {
            h4 {
                font-weight: bold;
            }
        }
    }
}
</style>
