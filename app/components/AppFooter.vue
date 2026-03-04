<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
const brandName = 'ABC'

const socialLinks = [
  { name: 'YouTube', icon: 'i-simple-icons-youtube', href: '#' },
  { name: 'X', icon: 'i-simple-icons-x', href: '#' },
  { name: 'Instagram', icon: 'i-simple-icons-instagram', href: '#' },
  { name: 'LinkedIn', icon: 'i-simple-icons-linkedin', href: '#' },
  { name: 'Facebook', icon: 'i-simple-icons-facebook', href: '#' }
]
</script>

<template>
  <footer class="bg-black text-white border-t border-[#6366f1]/30">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
        <!-- 左侧：版权 + 竖线 + 隐私政策 + 竖线 + 服务条款 -->
        <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm text-gray-300">
          <span>© {{ currentYear }} {{ brandName }}. {{ t('footer.allRightsReserved') }}</span>
          <span class="text-gray-500">|</span>
          <NuxtLink to="/outnet/privacy-policy.html" class="hover:text-white transition-colors">
            {{ t('footer.privacyPolicy') }}
          </NuxtLink>
          <span class="text-gray-500">|</span>
          <NuxtLink to="/terms" class="hover:text-white transition-colors">
            {{ t('footer.termsOfService') }}
          </NuxtLink>
        </div>

        <!-- 右侧：社交媒体图标 -->
        <div class="flex items-center gap-5">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.href"
            :aria-label="social.name"
            class="text-white hover:opacity-80 transition-opacity"
          >
            <UIcon :name="social.icon" class="size-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
