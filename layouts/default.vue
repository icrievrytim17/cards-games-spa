<template>
  <div>
    <header> <!-- Main container -->
        <nav class="navbar is-light">
          <div class="container">
            <div class="navbar-brand">
<!--              <a class="navbar-item">-->
<!--                <img src="https://bulma.io/images/bulma-type.png" alt="Logo">-->
<!--              </a>-->
              <p class="is-size-1"> Cards games</p>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active" href="/">
                  Home
                </a>
                <a class="navbar-item" href="/room">
                  Room
                </a>
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
        <p>
          <strong>Cards games</strong> by kauffret and gllm fgn.
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
