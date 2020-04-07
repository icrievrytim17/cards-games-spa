<template>
  <div>
    <!-- Nav Bar -->
    <nav class="navbar has-shadow is-white">
      <div class="container">
        <div class="navbar-brand">
          <img
            class="LogoAnimation"
            src="/logo-2.png"
            width="200"
            height="111"
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
              <a class="button is-primary">
                <span>Github</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>

    <!-- Container / body -->
    <div class="container has-background-primary-gradient is-fluid">
      <!-- Content of the page -->
      <nuxt />
    </div>

    <footer class="footer">
      <div class="content has-text-centered">
        <p><strong>Play & Drink</strong> by kauffret and gllm fgn. ©2020</p>
      </div>
    </footer>
  </div>
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
