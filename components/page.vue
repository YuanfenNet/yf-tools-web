<template>
    <div class="body-content">
        <el-card>
            <div slot="header" class="card-header">
                <el-page-header title="返回" :content="header" @back="goBack" />
            </div>
            <div class="content-wrapper">
                <slot />
            </div>
        </el-card>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class Page extends Vue {
    @Prop({ required: true })
    header!: string

    goBack() {
        this.$router.push('/')
    }
}
</script>
