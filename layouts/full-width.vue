<template>
    <div class="page">
        <div class="header">
            <header-content />
        </div>
        <div class="body-container">
            <slot />
        </div>
        <site-footer>
            <h6>
                Copyright ©
                <a href="https://www.yuanfen.net">猿奋网络</a>
                All rights reserved.
            </h6>
            <h6>
                <a target="_blank" href="https://beian.miit.gov.cn">沪ICP备13002299号</a>
                <a
                    target="_blank"
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010602003297"
                >
                    沪公网安备31010602003297号
                </a>
            </h6>
        </site-footer>
    </div>
</template>
