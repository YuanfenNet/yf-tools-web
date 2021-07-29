<template>
    <div class="error-page">
        <div class="error">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                fill="#DBE1EC"
                viewBox="0 0 48 48"
            >
                <path
                    d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                />
            </svg>

            <div class="title">{{ message }}</div>
            <p v-if="statusCode === 404" class="description">
                <a v-if="typeof $route === 'undefined'" class="error-link" href="/">返回首页</a>
                <NuxtLink v-else class="error-link" to="/">返回首页</NuxtLink>
            </p>
            <p v-else class="description">错误详情</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import HeaderContent from '@/components/header-content.vue'

@Component({ components: { HeaderContent } })
export default class Error extends Vue {
    @Prop({ default: {} })
    readonly error!: any

    head() {
        return {
            title: this.message,
        }
    }

    get statusCode() {
        return (this.error && this.error.statusCode) || 500
    }

    get message() {
        return (this.error && this.error.message) || '错误'
    }
}
</script>

<style lang="scss">
.error-page {
    padding: 1rem;
    color: #47494e;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;

    .error {
        max-width: 450px;
    }
    .title {
        font-size: 1.5rem;
        margin-top: 15px;
        color: #47494e;
        margin-bottom: 8px;
    }
    .description {
        color: #7f828b;
        line-height: 21px;
        margin-bottom: 10px;
    }
}
</style>
