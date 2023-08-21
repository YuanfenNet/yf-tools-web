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
const props = defineProps<{
    header: string
}>()

const router = useRouter()

function goBack() {
    router.push('/')
}
</script>
