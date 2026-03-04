<script setup lang="ts">
import { en, zh_cn } from '@nuxt/ui/locale'

const colorMode = useColorMode()
const { locale } = useI18n()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')
const uiLocale = computed(() => (locale.value === 'zh-CN' ? zh_cn : en))
const lang = computed(() => locale.value)

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/pwa-192x192.png' }
  ],
  htmlAttrs: {
    lang
  }
})

useSeoMeta({
  titleTemplate: '%s - ABC',
  ogImage: '/logo.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp :locale="uiLocale">
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
