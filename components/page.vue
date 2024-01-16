<template>
    <div class="body-content">
        <el-card>
            <template #header>
                <div class="card-header">
                    <el-page-header title="返回" :content="header" @back="goBack" />
                </div>
            </template>
            <div class="content-wrapper">
                <slot />
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    header: string
}>()

const router = useRouter()

function goBack() {
    router.push('/')
}
</script>

<style lang="scss">
.page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding-bottom: var(--footer-height);
    background: var(--el-bg-color-page);
    .header {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 4;
        width: 100%;
        border-bottom: 1px solid var(--el-border-color);
        background: var(--el-bg-color);
        box-shadow: var(--el-box-shadow-light);
    }
    .body-container {
        width: 100%;
        padding: 70px 10px 10px 10px;
        .el-page-header__content {
            font-weight: bold;
        }
    }
    .footer {
        height: var(--footer-height);
        background: var(--el-bg-color);
        border-top: 1px solid var(--el-border-color);
        flex-direction: column;
        box-shadow: var(--el-box-shadow-light);
        h6 {
            color: var(--el-text-color-primary);
            padding: 0 10px;
            font-size: 12px;
            a {
                color: var(--el-text-color-primary);
            }
        }
    }
    .content-wrapper {
        & > h4:first-child {
            margin-top: 0 !important;
        }
        h4 {
            font-weight: bold;
            margin: 20px 0;
        }
    }
}
</style>
