<template>
  <div>
    <picture>
      <source
        srcset="~/assets/img/bg-xxl.avif"
        media="(min-width: 1440px)"
        type="image/avif"
      >
      <source
        srcset="~/assets/img/bg-xxl.webp"
        media="(min-width: 1440px)"
        type="image/webp"
      >
      <source
        srcset="~/assets/img/bg-xxl.jpg"
        media="(min-width: 1440px)"
        type="image/jpeg"
      >
      <source
        srcset="~/assets/img/bg-xl.avif"
        media="(min-width: 1024px)"
        type="image/avif"
      >
      <source
        srcset="~/assets/img/bg-xl.webp"
        media="(min-width: 1024px)"
        type="image/webp"
      >
      <source
        srcset="~/assets/img/bg-xl.jpg"
        media="(min-width: 1024px)"
        type="image/jpeg"
      >
      <source
        srcset="~/assets/img/bg-md.avif"
        media="(min-width: 768px)"
        type="image/avif"
      >
      <source
        srcset="~/assets/img/bg-md.webp"
        media="(min-width: 768px)"
        type="image/webp"
      >
      <source
        srcset="~/assets/img/bg-md.jpg"
        media="(min-width: 768px)"
        type="image/jpeg"
      >
      <source
        srcset="~/assets/img/bg-sm.avif"
        type="image/avif"
      >
      <source
        srcset="~/assets/img/bg-sm.webp"
        type="image/webp"
      >
      <source
        srcset="~/assets/img/bg-sm.jpg"
        type="image/jpeg"
      >
      <img
        class="fixed w-screen h-screen bottom-0 left-1/2 -translate-x-1/2 object-cover object-bottom z-0 select-none"
        src="~/assets/img/bg-xl.jpg"
        alt=""
        aria-hidden="true"
      >
    </picture>
    <app-header />
    <main class="relative text-white">
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  components: {
    AppHeader
  },
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  }
}
</script>
