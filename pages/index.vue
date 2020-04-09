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
          Please before you start, read this
        </h2>
        <nuxt-link to="/home" class="button is-primary is-medium is-rounded">
          <span>Let's get started</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layout: "welcome",
}
</script>
