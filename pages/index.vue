<template>
  <div class="columns is-centered">
    <div class="column is-one-third">
      <div class="box box-shadow-lift">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">
                Red or Black
              </p>
              <hr class="primary" />
            </div>
          </div>
          <figure class="image is-16by9">
            <img src="/cards-pack/aces.png" />
          </figure>
        </div>
        <br />
        <p class="has-text-centered subtitle is-6">
          Red or black, more or less, in or out and finally clubs, spades,
          hearts or diamonds ?
        </p>
        <p class="has-text-centered subtitle is-8">
          2 to 10 players.
        </p>
        <hr />
        <nuxt-link to="/add-player" class="button is-black is-fullwidth">
          <span class="icon">
            <i class="fab fa-youtube" aria-hidden="true"></i>
          </span>
          &nbsp;
          <span>Launch a game</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
