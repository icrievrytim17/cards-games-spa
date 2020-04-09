<template>
  <header>
    <!-- Nav Bar -->
    <nav class="navbar has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <img
            class="LogoAnimation"
            src="/logo-2.png"
            width="225"
            height="130"
            alt="Logo"
          />
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <nuxt-link class="navbar-item is-active" to="/">
              Home
            </nuxt-link>
            <n-link class="navbar-item" to="/about">
              About
            </n-link>
            <span class="navbar-item">
              <a class="button is-dark">
                <span>Github</span>
              </a>
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
