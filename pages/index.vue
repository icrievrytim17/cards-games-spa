<template>
  <section class="hero is-black is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <img
          class="LogoAnimation"
          src="/logo-white-bttl-white.png"
          alt="Logo"
        />
        <br />
        <h1 class="title">
          Welcome to our website
        </h1>
        <h2 class="subtitle">
          Please before you start, read this :
        </h2>
        <div class="level">
          <div class="level-item">
            <fa-icon :icon="faChild" class="fa-2x has-text-primary" />
            &nbsp; &nbsp;
            <p>Everyone playing is over the age of 18</p>
          </div>
        </div>
        <div class="level">
          <div class="level-item">
            <fa-icon :icon="faWineBottle" class="fa-2x" />
            &nbsp; &nbsp;
            <p>Everyone playing will drink responsibly</p>
          </div>
        </div>
        <div class="level">
          <div class="level-item">
            <fa-icon :icon="faHandshake" class="fa-2x has-text-primary" />
            &nbsp; &nbsp;
            <p>Agree to this rules</p>
          </div>
        </div>
        <br />
        <nuxt-link to="/home" class="button is-primary is-medium is-rounded">
          <span>Let's get started</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
import { faWineBottle } from "@fortawesome/free-solid-svg-icons"
import { faHandshake } from "@fortawesome/free-solid-svg-icons"
import { faChild } from "@fortawesome/free-solid-svg-icons"

export default {
  layout: "welcome",
  computed: {
    faWineBottle() {
      return faWineBottle
    },
    faHandshake() {
      return faHandshake
    },
    faChild() {
      return faChild
    },
  },
}
</script>
