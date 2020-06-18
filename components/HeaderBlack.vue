<template>
  <header>
    <!-- Nav Bar -->
    <nav class="navbar is-black">
      <div class="container">
        <div class="navbar-brand">
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
            <span
              v-if="locale === 'en'"
              class="navbar-item is-black has-dropdown"
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
              <div class="navbar-dropdown is-black">
                <a class="navbar-item is-black" @click="changeLanguage('fr')">
                  <img src="/france.png" width="25" height="25" alt="Logo" />
                  &nbsp;French&nbsp;
                </a>
              </div>
            </span>
            <span
              v-if="locale === 'fr'"
              class="navbar-item is-black has-dropdown"
              :class="{ 'is-active': hoverLang }"
              @mouseover="hoverLang = true"
              @mouseleave="hoverLang = false"
            >
              <a class="navbar-link" @click="changeLanguage('fr')">
                <img src="/france.png" width="25" height="25" alt="Logo" />
                &nbsp;Français
              </a>
              <div class="navbar-dropdown is-black">
                <a class="navbar-item is-black" @click="changeLanguage('en')">
                  <img
                    src="/united-kingdom.png"
                    width="25"
                    height="25"
                    alt="Logo"
                  />
                  &nbsp;Anglais&nbsp;
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
.navbar-menu.is-black {
  background-color: #1b1b1e;
}
</style>
<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      showNavBar: false,
      hoverLang: false,
    }
  },
  computed: {
    //GET pour récupérer dans la locale
    ...mapGetters({
      locale: "language/get",
    }),
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
