/* eslint-disable */

export default ({ app }) => {
    if (process.env.NODE_ENV !== 'production') return

    // 百度统计
    let _hmt = _hmt || []
    ;(function (document) {
        let hm = document.createElement('script')
        hm.src = 'https://hm.baidu.com/hm.js?aef7b000b28830e7135eb30baec2b714'
        let s = document.getElementsByTagName('script')[0]
        s.parentNode.insertBefore(hm, s)
    })(window.document)

    // 百度自动推送
    const baiduPush = (href) => {
        !(function () {
            let e = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi
            let r = href || window.location.href
            let t = document.referrer
            if (!e.test(r)) {
                let o = 'https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif'
                t
                    ? ((o += '?r=' + encodeURIComponent(document.referrer)), r && (o += '&l=' + r))
                    : r && (o += '?l=' + r)
                let i = new Image()
                i.src = o
            }
        })(window)
    }

    app.router.afterEach((to, from) => {
        _hmt.push(['_trackPageview', to.fullPath])
        baiduPush(window.location.origin + to.fullPath)
    })
}
