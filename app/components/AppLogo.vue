<template>
  <div class="flex items-center">
    <NuxtImg
      src="logo.png"
      alt="ABC Logo"
      class="logo-image"
    />
    <span class="logo-text">ABC</span>
  </div>
</template>

<style scoped>
.logo-image {
  margin-right: 10px;
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.logo-text {
  font-size: 24px;
  color: currentColor;
}
</style>
