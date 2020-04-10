<template>
  <section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is centered">
            <div class="column">
              <div class="box has-background-black">
                <p class="title has-text-white">
                  <span class="icon">
                    <fa-icon :icon="faHandPeace" />
                  </span>
                  <strong class="has-text-primary"> EASY, FAST, FUN </strong>
                </p>
                <p class="title is-5 has-text-white">
                  This is a free website, where you can launch funny games
                  during your parties. You don't even have to know the rules...
                </p>
              </div>
            </div>
            <div class="column has-text-centered">
              <div class="box has-background-black">
                <p class="title is-4 has-text-white">
                  Share this page
                </p>
                <span class="icon">
                  <fa-icon :icon="faTwitter" class="fa-2x" />
                </span>
                &nbsp;
                <span class="icon">
                  <fa-icon :icon="faFacebook" class="fa-2x" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="columns is-centered is-multiline is-marginless">
      <div class="column is-one-third has-text-centered">
        <div class="box box-shadow-lift">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4 has-text-dark">
                  RED OR BLACK
                </p>
                <hr class="primary" />
              </div>
            </div>
            <figure class="image is-16by9">
              <img src="/cards-pack/aces.png" />
            </figure>
          </div>
          <br />
          <p class="subtitle is-6">
            Red or black, more or less, in or out and finally clubs, spades,
            hearts or diamonds ? Then there is the river ... Prepare yourself !
          </p>
          <div
            class="field is-grouped is-grouped-multiline has-addons has-addons-centered"
          >
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-link">18+</span>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-link">MIN</span>
                <span class="tag is-black">2 players</span>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-link">MAX</span>
                <span class="tag is-black">10 players</span>
              </div>
            </div>
          </div>
          <hr />
          <nuxt-link
            to="/add-player"
            class="button is-dark is-medium is-rounded"
          >
            <span>Launch a game</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { faHandPeace } from "@fortawesome/free-regular-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

export default {
  computed: {
    faHandPeace() {
      return faHandPeace
    },
    faTwitter() {
      return faTwitter
    },
    faFacebook() {
      return faFacebook
    },
  },
}
</script>
