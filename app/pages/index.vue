<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const page = computed(() => ({
  title: t('hero.title'),
  hero: {
    badge: t('hero.badge'),
    description: t('hero.description'),
    links: [
      {
        label: 'iOS Download',
        icon: 'i-lucide-download',
        trailing: true,
        to: '#',
        size: 'xl'
      }
    ]
  },
  features: {
    title: t('features.title'),
    items: [
      {
        icon: 'gn01.png',
        title: t('features.items.0.title'),
        description: t('features.items.0.description'),
        advantage: t('features.items.0.advantage')
      },
      {
        icon: 'gn02.png',
        title: t('features.items.1.title'),
        description: t('features.items.1.description'),
        advantage: t('features.items.1.advantage')
      },
      {
        icon: 'gn03.png',
        title: t('features.items.2.title'),
        description: t('features.items.2.description'),
        advantage: t('features.items.2.advantage')
      }
    ]
  },
  advantages: {
    title: t('advantages.title'),
    description: t('advantages.description'),
    items: [
      { label: t('advantages.items.0.label'), description: t('advantages.items.0.description') },
      { label: t('advantages.items.1.label'), description: t('advantages.items.1.description') },
      { label: t('advantages.items.2.label'), description: t('advantages.items.2.description') },
      { label: t('advantages.items.3.label'), description: t('advantages.items.3.description') }
    ]
  },
  pricing: {
    title: t('pricing.title'),
    description: t('pricing.description'),
    plans: [
      { name: t('pricing.planWeek'), price: '$4.99', perWeek: t('pricing.perWeek'), popular: false },
      { name: t('pricing.planMonth'), price: '$4.99', perWeek: t('pricing.perWeek'), popular: true },
      { name: t('pricing.planQuarter'), price: '$4.99', perWeek: t('pricing.perWeek'), popular: false },
      { name: t('pricing.planYear'), price: '$4.99', perWeek: t('pricing.perWeek'), popular: false }
    ]
  },
  download: {
    title: t('download.title'),
    description: t('download.description')
  }
}))

const seoTitle = computed(() => t('seo.title'))
const seoOgTitle = computed(() => t('seo.ogTitle'))
const seoDescription = computed(() => t('seo.description'))
const seoKeywords = computed(() => t('seo.keywords'))

useSeoMeta({
  title: seoTitle,
  ogTitle: seoOgTitle,
  description: seoDescription,
  ogDescription: seoDescription,
  keywords: seoKeywords,
  author: 'ABC Technology Limited',
  ogImage: '/logo.png',
  ogUrl: 'https://wwww.touchoutnet.com',
  twitterCard: 'summary_large_image'
})

const ldJsonScript = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ABC',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: t('seo.description'),
    publisher: {
      '@type': 'Organization',
      name: 'ABC',
      email: 'qianyunhr@gmail.com'
    }
  })
)

useHead({
  link: [
    { rel: 'canonical', href: 'https://wwww.touchoutnet.com' }
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: ldJsonScript
    }
  ]
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      id="home"
      class="hero-section min-h-screen lg:min-h-[1015px] flex items-center py-20"
      style="background-image: linear-gradient(90deg, #202020 0%, #000000 100%);"
    >
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <!-- 左侧内容 -->
          <div class="space-y-6 sm:space-y-8 lg:space-y-10">
            <!-- 标签 -->
            <div class="flex items-center gap-2">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#333333] border border-[#555555] rounded-[10px]">
                <div class="w-2 h-2 bg-[#00c814] rounded-full mr-1"></div>
                <span class="text-[12px] sm:text-[14px] font-medium text-white">
                  {{ page.hero.badge }}
                </span>
              </div>
            </div>

            <!-- 标题 -->
            <h1 class="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] sm:leading-tight">
              {{ page.title }}
            </h1>

            <!-- 描述列表 -->
            <div class="space-y-2 sm:space-y-3 lg:space-y-4">
              <p
                class="text-white text-[14px] sm:text-base lg:text-[17px] leading-relaxed"
              >
                {{ page.hero.description }}
              </p>
            </div>

            <!-- 下载按钮 -->
            <div class="pt-2 sm:pt-4 flex flex-col gap-3 sm:gap-4">
              <div class="flex flex-wrap gap-3 sm:gap-4">
                <UButton
                  to="#"
                  size="lg"
                  class="btn-download text-sm sm:text-base px-5 py-2.5 sm:px-8 sm:py-3 min-w-[140px] sm:min-w-[160px] rounded-[10px] text-white font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <template #leading>
                    <NuxtImg src="apple.png" alt="Apple" class="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                  </template>
                  {{ t('download.ios') }}
                </UButton>
                <UButton
                  to="#"
                  size="lg"
                  class="btn-download text-sm sm:text-base px-5 py-2.5 sm:px-8 sm:py-3 min-w-[140px] sm:min-w-[160px] rounded-[10px] text-white font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <template #leading>
                    <NuxtImg src="android.png" alt="Android" class="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                  </template>
                  {{ t('download.android') }}
                </UButton>
              </div>
              <p class="flex items-center gap-1.5 text-sm text-white/80">
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-white/80" />
                {{ t('download.guarantee') }}
              </p>
            </div>
          </div>

          <!-- 右侧图片 -->
          <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <NuxtImg
              src="banner.png"
              :alt="t('common.heroAlt')"
              class="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[800px] h-auto"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Features Introduction Section -->
    <section id="features" class="bg-white dark:bg-[#101828] py-16 sm:py-20 lg:py-24">
      <!-- Features Introduction Section -->
      <UContainer>
        <div class="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          <h2 class="text-[#101828] dark:text-white text-[28px] sm:text-[36px] lg:text-[48px] font-bold leading-tight">
            {{ page.features.title }}
          </h2>
          <!-- Features Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div
              v-for="(item, index) in page.features.items"
              :key="index"
              class="bg-[#f7f8f9] dark:bg-[#1A1D2E] rounded-[20px] p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <!-- Icon -->
              <div class="mb-4 sm:mb-6 flex justify-center">
                <NuxtImg
                  :src="item.icon"
                  :alt="item.title"
                  class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                />
              </div>

              <!-- Title -->
              <h3 class="text-[#101828] dark:text-white text-left text-[18px] sm:text-[20px] font-bold mb-2 sm:mb-3">
                {{ item.title }}
              </h3>

              <!-- Description -->
              <p class="text-[#666666] dark:text-[#CCCCCC] text-left text-[13px] sm:text-[15px] leading-relaxed">
                {{ item.description }}
              </p>
              <!-- Advantage -->
              <p
                v-if="item.advantage"
                class="mt-3 sm:mt-4 text-[#101828] dark:text-white text-left text-[12px] sm:text-[14px] font-medium"
              >
                {{ item.advantage }}
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Advantages Section -->
    <section
      id="advantages"
      class="bg-[#f7f8f9] dark:bg-[#101828] py-16 sm:py-20 lg:py-24"
    >
      <UContainer>
        <div class="text-center mb-10">
          <h2 class="text-[#101828] dark:text-white mb-5 text-[28px] sm:text-[36px] lg:text-[48px] font-bold leading-tight">
            {{ page.advantages.title }}
          </h2>
          <p class="text-[#666666] dark:text-[#CCCCCC] text-[14px] sm:text-base lg:text-[17px] leading-relaxed">
            {{ page.advantages.description }}
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <!-- 左侧内容 -->
          <div class="space-y-6 sm:space-y-8 order-1 lg:order-1 max-w-xl mx-auto lg:mx-0 w-full">
            <!-- Advantages List -->
            <ul class="space-y-3 sm:space-y-4">
              <li
                v-for="(item, index) in page.advantages.items"
                :key="index"
                class="flex items-start gap-3 sm:gap-4"
              >
                <!-- Bullet Icon -->
                <div class="shrink-0 mt-[3px]">
                  <NuxtImg
                    src="check.png"
                    alt="bullet"
                    class="w-5 h-5"
                  />
                </div>

                <!-- Content -->
                <div>
                  <h3 class="text-[#101828] dark:text-white text-left text-[18px] sm:text-[20px] font-bold mb-2 sm:mb-3">
                    {{ item.label }}
                  </h3>
                  <p class="text-[#666666] dark:text-white text-[14px] sm:text-[16px] lg:text-[17px] leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <!-- 右侧图片 -->
          <div class="flex justify-center order-2 lg:order-2">
            <NuxtImg
              src="why.png"
              :alt="t('common.whyAlt')"
              class="w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[560px] h-auto"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Price Section -->
    <section
      id="price"
      class="bg-white dark:bg-[#101828] py-16 sm:py-20 lg:py-24"
    >
      <UContainer>
        <!-- 标题区域 -->
        <div class="text-center mb-10 sm:mb-14">
          <h2 class="text-[#101828] dark:text-white text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-tight mb-3">
            {{ page.pricing.title }}
          </h2>
          <p class="text-[#666666] dark:text-[#CCCCCC] text-[14px] sm:text-base">
            {{ page.pricing.description }}
          </p>
        </div>

        <!-- 价格卡片 -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          <div
            v-for="plan in page.pricing.plans"
            :key="plan.name"
            class="relative flex flex-col items-center"
          >
            <!-- 最受欢迎标签 -->
            <div
              v-if="plan.popular"
              class="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
            >
              <span class="inline-block bg-[#d6f5d6] text-[#1a7a1a] text-[12px] font-medium px-4 py-1 rounded-full whitespace-nowrap">
                {{ t('pricing.popular') }}
              </span>
            </div>

            <!-- 卡片主体 -->
            <div
              class="w-full rounded-[16px] px-6 py-8 sm:py-10 flex flex-col items-center gap-2 transition-transform hover:scale-[1.02]"
              :class="plan.popular
                ? 'bg-[#1a1a1a] dark:bg-[#0d0d0d] shadow-xl pt-10 sm:pt-12'
                : 'bg-white dark:bg-[#1a2332] border border-[#e5e7eb] dark:border-[#2a3a4a] shadow-sm'"
            >
              <!-- 计划名 -->
              <span
                class="text-[15px] sm:text-[16px] font-medium"
                :class="plan.popular ? 'text-white' : 'text-[#333333] dark:text-[#cccccc]'"
              >
                {{ plan.name }}
              </span>

              <!-- 价格 -->
              <div
                class="text-[32px] sm:text-[36px] font-bold mt-2"
                :class="plan.popular ? 'text-white' : 'text-[#101828] dark:text-white'"
              >
                {{ plan.price }}
              </div>

              <!-- 每周价格 -->
              <span
                class="text-[13px] sm:text-[14px]"
                :class="plan.popular ? 'text-[#aaaaaa]' : 'text-[#999999] dark:text-[#777777]'"
              >
                {{ plan.perWeek }}
              </span>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Download Section -->
    <section
      id="download"
      class="py-16 sm:py-20 lg:py-24"
      style="background-image: linear-gradient(0deg, #e0fcf7 50%, #d2f1fd 100%);"
    >
      <UContainer>
        <div class="text-center max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <h2 class="text-[#101828] dark:text-white text-[28px] sm:text-[36px] lg:text-[48px] font-bold leading-tight">
            {{ page.download.title }}
          </h2>
          <p class="text-[#666666] dark:text-[#CCCCCC] text-[14px] sm:text-base lg:text-[17px] leading-relaxed">
            {{ page.download.description }}
          </p>
          <!-- App Store / Google Play Badges -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <UButton
              to="#"
              class="bg-black dark:bg-white rounded-[12px] px-6 py-3 flex items-center gap-3 hover:opacity-80 transition-opacity text-white dark:text-black min-w-0"
            >
              <template #leading>
                <UIcon
                  name="i-simple-icons-apple"
                  class="w-8 h-8 text-white dark:text-black shrink-0"
                />
              </template>
              <div class="text-left">
                <div class="text-[10px] opacity-80">
                  Download on the
                </div>
                <div class="text-[16px] font-semibold">
                  App Store
                </div>
              </div>
            </UButton>
            <UButton
              to="#"
              class="bg-black dark:bg-white rounded-[12px] px-6 py-3 flex items-center gap-3 hover:opacity-80 transition-opacity text-white dark:text-black min-w-0"
            >
              <template #leading>
                <NuxtImg
                  src="google-play.png"
                  alt="Google Play"
                  class="w-8 h-8 shrink-0 object-contain"
                />
              </template>
              <div class="text-left">
                <div class="text-[10px] opacity-80">
                  Get it on
                </div>
                <div class="text-[16px] font-semibold">
                  Google Play
                </div>
              </div>
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section 样式 */
.hero-section {
  position: relative;
}
</style>
