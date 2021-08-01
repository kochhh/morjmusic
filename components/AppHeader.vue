<template>
  <header class="relative text-white">
    <div class="container">
      <div class="flex items-center relative h-20 md:h-24 lg:h-28">
        <nuxt-link :to="localePath('/')">
          <img
            src="~/assets/img/solarikolo.svg"
            width="163"
            height="56"
            alt="Solarikolo"
            class="w-[130px] h-[45px] md:w-[163px] md:h-[56px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          >
        </nuxt-link>
        <button
          type="button"
          class="relative z-50 ml-auto w-10 h-10 flex items-center justify-center rounded-sm lg:hidden"
          @click="navOpen = !navOpen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-8 h-8" viewBox="0 0 16 16" v-if="navOpen">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-8 h-8" viewBox="0 0 16 16" v-else>
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
        <nav class="nav" :class="{ 'nav--open': navOpen }">
          <ul class="flex flex-col items-center m-0 p-0 list-none space-y-4 text-center lg:flex-row lg:space-y-0 lg:space-x-8 lg:text-left">
            <li>
              <nuxt-link :to="localePath('/tour')">
                {{ $t('tour.title') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/blog')">
                {{ $t('blog.title') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/contacts')">
                {{ $t('contacts.title') }}
              </nuxt-link>
            </li>
          </ul>
          <ul class="flex space-x-8 m-0 p-0 list-none mt-10 lg:mt-0">
            <li>
              <a href="#" title="Spotify" aria-label="Spotify" target="_blank">
                <font-awesome-icon :icon="spotify" size="lg" />
              </a>
            </li>
            <li>
              <a href="#" title="iTunes" aria-label="iTunes" target="_blank">
                <font-awesome-icon :icon="itunes" size="lg" />
              </a>
            </li>
            <li>
              <a href="#" title="YouTube" aria-label="YouTube" target="_blank">
                <font-awesome-icon :icon="youtube" size="lg" />
              </a>
            </li>
            <li>
              <a href="#" title="Instagram" aria-label="Instagram" target="_blank">
                <font-awesome-icon :icon="instagram" size="lg" />
              </a>
            </li>
            <li>
              <a href="#" title="Facebook" aria-label="Facebook" target="_blank">
                <font-awesome-icon :icon="facebook" size="lg" />
              </a>
            </li>
            <li>
              <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6" viewBox="0 0 16 16">
                  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpotify, faItunes, faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default {
  data() {
    return {
      spotify: faSpotify,
      itunes: faItunes,
      youtube: faYoutube,
      instagram: faInstagram,
      facebook: faFacebook,
      navOpen: false,
    }
  },
  components: {
    FontAwesomeIcon,
  },
}
</script>

<style lang="postcss" scoped>
.nav {
  @apply fixed z-40 left-0 top-0 w-screen h-screen flex flex-col items-center justify-center bg-[#0c65a8] opacity-0 invisible pointer-events-none scale-105 transition-all duration-300;

  @media screen(lg) {
    @apply static w-full h-auto flex-row-reverse bg-transparent justify-between opacity-100 visible pointer-events-auto scale-100;
  }
}

.nav--open {
  @apply opacity-100 visible pointer-events-auto scale-100;
}
</style>
