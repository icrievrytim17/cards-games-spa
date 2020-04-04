<template>
  <div>
    <header>
      <!-- Main container -->
      <nav class="navbar is-light">
        <div class="container">
          <div class="navbar-brand">
            <img src="/hiclipart.com.png" width="75" height="75" alt="Logo" />
            <p class="is-size-1">
              Cards games
            </p>
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
              <n-link class="navbar-item" to="/room">
                Room
              </n-link>
              <span class="navbar-item">
                <a class="button is-dark">
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <nuxt />
    <footer class="footer">
      <div class="content has-text-centered">
        <p><strong>Cards games</strong> by kauffret and gllm fgn.</p>
      </div>
    </footer>
  </div>
</template>
