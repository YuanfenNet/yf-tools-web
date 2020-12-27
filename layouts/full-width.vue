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
            <Nuxt />
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