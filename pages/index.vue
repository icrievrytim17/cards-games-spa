<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <div class="box has-text-centered">
          <div>
            <p class="title is-2 has-text-black">
              <span>RED</span>
              <span>or</span>
              <span>BLACK</span>
            </p>
          </div>
          <figure class="image is-16by9">
            <img src="/cards-pack/aces.png" />
          </figure>
          <br />
          <div>
            <nuxt-link to="/add-player" class="button is-black is-large">
              <span>Play</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
