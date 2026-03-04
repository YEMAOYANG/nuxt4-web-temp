<script setup lang="ts">
const { isLoading } = useLoadingIndicator()

const appear = ref(false)
const appeared = ref(false)

onMounted(() => {
  setTimeout(() => {
    appear.value = true
    setTimeout(() => {
      appeared.value = true
    }, 1000)
  }, 0)
})
</script>

<template>
  <div
    class="absolute inset-0 w-full h-full overflow-hidden transition-all -z-1"
    :class="[
      isLoading ? 'animate-pulse' : (appear ? '' : 'opacity-0'),
      appeared ? 'duration-400': 'duration-1000'
    ]"
  >
    <!-- Banner 图片背景 -->
    <div class="absolute inset-0 w-full h-full">
      <NuxtImg
        src="banner.png"
        alt="ABC Hero Background"
        class="w-full h-full object-cover"
        loading="lazy"
        preset="banner"
      />
      <!-- 渐变遮罩，让文字更清晰 -->
      <div class="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40"></div>
    </div>
  </div>
</template>
