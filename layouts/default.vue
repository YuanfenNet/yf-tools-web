<template>
  <div class="page">
    <div class="header">
      <el-row>
        <el-col
          :xs="{ span: 24 }"
          :sm="{ span: 24 }"
          :md="{ span: 20, offset: 2 }"
          :lg="{ span: 18, offset: 3 }"
          :xl="{ span: 12, offset: 6 }"
        >
          <header-content />
        </el-col>
      </el-row>
    </div>
    <div class="body-container">
      <el-row>
        <el-col
          :xs="{ span: 24 }"
          :sm="{ span: 24 }"
          :md="{ span: 20, offset: 2 }"
          :lg="{ span: 18, offset: 3 }"
          :xl="{ span: 12, offset: 6 }"
        >
          <slot />
        </el-col>
      </el-row>
    </div>
    <site-footer>
      <h6>
        Copyright ©
        <a href="https://www.yuanfen.net">猿奋网络</a>
        All rights reserved.
      </h6>
      <h6>
        <a target="_blank" href="https://beian.miit.gov.cn">沪ICP备13002299号</a>
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010602003297">
          沪公网安备31010602003297号
        </a>
      </h6>
    </site-footer>
  </div>
</template>
