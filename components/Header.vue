<template>
  <header>
    <!-- Nav Bar -->
    <nav class="navbar has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/home">
            <img
              class="LogoAnimation"
              src="/logo-2.png"
              width="225"
              height="130"
              alt="Logo"
            />
          </nuxt-link>
          <span
            class="navbar-burger burger"
            :class="{ 'is-active': showNavBar }"
            data-target="navbarMenuHeroA"
            @click="toogle"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          id="navbarMenuHeroA"
          class="navbar-menu"
          :class="{ 'is-active': showNavBar }"
        >
          <div class="navbar-end">
            <nuxt-link class="navbar-item is-active" to="/home">
              Home
            </nuxt-link>
            <n-link class="navbar-item" to="/about">
              About
            </n-link>
            <span
              class="navbar-item has-dropdown"
              :class="{ 'is-active': hoverLang }"
              @mouseover="hoverLang = true"
              @mouseleave="hoverLang = false"
            >
              <a class="navbar-link" @click="changeLanguage('en')">
                <img
                  src="/united-kingdom.png"
                  width="25"
                  height="25"
                  alt="Logo"
                />
                &nbsp;English
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item" @click="changeLanguage('fr')">
                  <img src="/france.png" width="25" height="25" alt="Logo" />
                  &nbsp;Français&nbsp;
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<style>
.LogoAnimation {
  animation: 2s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
<script>
import { faGithub } from "@fortawesome/free-brands-svg-icons"
export default {
  data() {
    return {
      showNavBar: false,
      hoverLang: false,
    }
  },
  computed: {
    faGithub() {
      return faGithub
    },
  },
  methods: {
    toogle() {
      this.showNavBar = !this.showNavBar
    },
    changeLanguage: function (locale) {
      this.$i18n.locale = locale
      this.$store.commit("language/SET_LANG", locale)
    },
  },
}
</script>
