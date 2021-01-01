<template>
    <div class="page">
        <div class="header">
            <el-row>
                <el-col :xs="{ span:24 }"
                        :sm="{ span:22, offset: 1 }"
                        :md="{ span:16, offset: 4 }"
                        :lg="{ span:14, offset: 5 }"
                        :xl="{ span:12, offset: 6 }">
                    <header-content />
                </el-col>
            </el-row>
        </div>
        <div class="body-container">
            <el-row>
                <el-col :xs="{ span:24 }"
                        :sm="{ span:22, offset: 1 }"
                        :md="{ span:16, offset: 4 }"
                        :lg="{ span:14, offset: 5 }"
                        :xl="{ span:12, offset: 6 }">
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

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import HeaderContent from '@/components/header-content.vue'

@Component({ components: { HeaderContent } })
export default class Default extends Vue {}
</script>