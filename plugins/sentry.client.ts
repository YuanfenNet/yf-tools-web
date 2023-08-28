// plugins/sentry.client.ts
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'
import { Router } from 'vue-router'

export default defineNuxtPlugin((nuxtApp) => {
    const { vueApp } = nuxtApp
    const vueRouter = nuxtApp.$router as Router

    Sentry.init({
        app: [vueApp],
        dsn: 'https://9c0e9d7fe201779dd8063288b28f48d6@o4505389542866944.ingest.sentry.io/4505779553042432',
        environment: process.dev ? 'development' : 'production',
        enabled: !process.dev,
        integrations: [
            new BrowserTracing({
                routingInstrumentation: Sentry.vueRouterInstrumentation(vueRouter),
            }),
        ],
        tracesSampleRate: 1.0,
        tracingOptions: {
            trackComponents: true,
            timeout: 500,
            hooks: ['activate', 'mount', 'update'],
        },
        beforeSend(event, hint) {
            // Check if it is an exception, and if so, log it.
            if (event.exception) {
                // eslint-disable-next-line no-console
                console.error(`[Exeption handled by Sentry]: (${hint.originalException})`, { event, hint })
            }
            // Continue sending to Sentry
            return event
        },
    })

    vueApp.mixin(Sentry.createTracingMixins({ trackComponents: true, timeout: 2000, hooks: ['activate', 'mount', 'update'] }))
    Sentry.attachErrorHandler(vueApp, {
        logErrors: false,
        attachProps: true,
        trackComponents: true,
        timeout: 2000,
        hooks: ['activate', 'mount', 'update'],
    })

    return {
        provide: {
            sentrySetContext: Sentry.setContext,
            sentrySetUser: Sentry.setUser,
            sentrySetTag: Sentry.setTag,
            sentryAddBreadcrumb: Sentry.addBreadcrumb,
            sentryCaptureException: Sentry.captureException,
        },
    }
})
