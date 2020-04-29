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
            <span class="navbar-item">
              <a
                class="button is-dark"
                href="https://github.com/icrievrytim17/cards-games-spa"
                target="_blank "
              >
                <span class="icon">
                  <fa-icon :icon="faGithub" class="fa-1x" />
                </span>
                <span>Github</span>
              </a>
            </span>
            <span class="navbar-item">
              <img
                src="/united-kingdom.png"
                width="25"
                height="25"
                alt="Logo"
              />
            </span>
            <span class="navbar-item">
              <img src="/france.png" width="25" height="25" alt="Logo" />
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
    }
  },
  computed: {
    faGithub() {
      return faGithub
    },
  },
  methods: {
    toogle() {
      console.log("toogle")
      this.showNavBar = !this.showNavBar
    },
  },
}
</script>
