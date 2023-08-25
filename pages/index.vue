<template>
    <div class="body-content page-home">
        <el-card>
            <template #header>
                <div class="card-header">
                    <h4>工具列表</h4>
                </div>
            </template>
            <el-row>
                <NuxtLink class="tool-link" to="/image2pdf">
                    <ElButton type="primary" size="large" plain round>图片合成 PDF</ElButton>
                </NuxtLink>
                <NuxtLink class="tool-link" to="/json">
                    <ElButton type="primary" size="large" plain round>JSON 解析&格式化</ElButton>
                </NuxtLink>
                <NuxtLink class="tool-link" to="/password">
                    <ElButton type="primary" size="large" plain round>随机密码生成</ElButton>
                </NuxtLink>
                <NuxtLink class="tool-link" to="/base64">
                    <ElButton type="primary" size="large" plain round>Base64 编码&解码</ElButton>
                </NuxtLink>
                <NuxtLink class="tool-link" to="/hash">
                    <ElButton type="primary" size="large" plain round>哈希值计算</ElButton>
                </NuxtLink>
                <NuxtLink class="tool-link" to="/time">
                    <ElButton type="primary" size="large" plain round>时间格式转换</ElButton>
                </NuxtLink>
                <NuxtLink class="tool-link" to="/entity">
                    <ElButton type="primary" size="large" plain round>HTML 实体转换</ElButton>
                </NuxtLink>
                <NuxtLink class="tool-link" to="/financial-freedom">
                    <ElButton type="primary" size="large" plain round>财富自由计算器</ElButton>
                </NuxtLink>
            </el-row>
        </el-card>
        <el-card>
            <template #header>
                <div class="card-header">
                    <h4>任务计划</h4>
                </div>
            </template>
            <ul class="todo-list">
                <li>
                    <div class="todo-item">
                        视频和 GIF 格式转换
                        <el-tag size="small" type="" effect="plain" round>计划 2023Q3 完成</el-tag>
                    </div>
                </li>
                <li>
                    <div class="todo-item">
                        Font2svg
                        <el-tag size="small" type="" effect="plain" round>计划 2023Q4 完成</el-tag>
                    </div>
                </li>
                <li>
                    <div class="todo-item">图片压缩</div>
                </li>
                <li>
                    <div class="todo-item">天数计算器</div>
                </li>
            </ul>
        </el-card>
        <el-card>
            <template #header>
                <div class="card-header">
                    <h4>更新记录</h4>
                </div>
            </template>
            <content-renderer class="changelog" :value="changelog" />
        </el-card>
    </div>
</template>

<script setup lang="ts">
const changelog = await queryContent('/changelog').findOne()

useHead({
    title: '猿奋工具箱',
    titleTemplate: '',
    meta: [
        {
            name: 'description',
            content:
                '致力于做精致好用的小工具，免费为广大开发者提供 JSON 解析&格式化、随机密码生成、图片 Base64 编码&解码、哈希值计算、时间格式转换、HTML 实体转换等小工具。',
        },
    ],
})
</script>

<style lang="scss">
@use '~/assets/scss/variables.scss' as *;

.page-home {
    .el-card {
        margin-bottom: 20px;
        .card-header {
            h4 {
                font-weight: bold;
            }
        }
        .el-card__body {
            padding: 20px;
            .todo-list {
                li {
                    .todo-item {
                        display: flex;
                        align-items: center;
                        .el-tag {
                            margin-left: 6px;
                        }
                    }
                }
            }
            .changelog {
                & > :first-child {
                    margin-top: 0 !important;
                }

                h4 {
                    margin-top: 14px;
                    margin-bottom: 6px;
                    font-weight: bold;
                }
                li {
                    font-size: 14px;
                }
            }
        }
    }
    .tool-link {
        margin: 5px;
    }
}
</style>
