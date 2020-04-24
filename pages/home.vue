<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column">
            <div class="tile is-ancestor">
              <div class="tile is-vertical">
                <div class="tile">
                  <div class="tile is-parent">
                    <div class="tile is-child box has-background-black">
                      <p class="title is-4 has-text-white">
                        <span class="icon">
                          <fa-icon :icon="faHandPeace" />
                        </span>
                        <strong>
                          EASY, FAST & FUN
                        </strong>
                      </p>
                      <p class="title is-6 has-text-white">
                        Welcome to our online drinking game! The game is simple,
                        you don’t even have to know the rules... So be ready
                        with your alcohol drink & play with your friends!
                      </p>
                    </div>
                  </div>
                  <div
                    class="tile is-parent has-text-centered is-vertical is-4"
                  >
                    <div class="tile is-child box has-background-black">
                      <p class="title has-text-white is-4">
                        Share with my friends
                      </p>
                      <a href="/" target="_blank">
                        <span class="icon share-twitter has-text-white">
                          <fa-icon :icon="faTwitter" class="fa-2x" />
                        </span>
                      </a>
                      &nbsp; &nbsp; &nbsp;
                      <a href="/" target="_blank">
                        <span class="icon share-facebook has-text-white">
                          <fa-icon :icon="faFacebook" class="fa-2x" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="tile">
                  <div class="tile is-parent is-8">
                    <div
                      class="tile is-child box box-shadow-lift has-text-centered"
                    >
                      <p class="title is-4 has-text-dark">
                        RED OR BLACK
                      </p>
                      <hr class="primary" />
                      <div class="card-image">
                        <figure class="image has-ratio">
                          <img
                            class="container"
                            src="/cards-pack/aces.png"
                            style="height: 60%; width: 60%;"
                          />
                        </figure>
                      </div>
                      <br />
                      <p class="subtitle is-6 is-marginless">
                        Red or black, more or less, in or out and finally clubs,
                        spades, hearts or diamonds ?
                      </p>
                      <p class="subtitle is-6">
                        Then there is the river ... Prepare yourself !
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
                        class="button is-primary is-medium is-rounded"
                      >
                        <span class="icon">
                          <fa-icon :icon="faPlay" />
                        </span>
                        <span>Play a game</span>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="tile is-parent">
                    <div class="tile is-child box has-text-centered">
                      <p class="title is-6">
                        They played, they
                        <fa-icon
                          :icon="faHeart"
                          class="fa-lg has-text-primary"
                        />
                        it, and you will too!
                      </p>
                      <div class="box">
                        <article class="media">
                          <div class="media-content">
                            <div class="content">
                              <p class="is-italic">
                                <strong>John Smith</strong>
                                <small>@johnsmith</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aenean efficitur sit amet massa
                                fringilla egestas.
                              </p>
                            </div>
                            <nav class="level is-mobile">
                              <span class="icon level-item has-text-primary">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                              <span class="icon level-item has-text-primary">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                              <span class="icon level-item has-text-primary">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                              <span class="icon level-item has-text-primary">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                              <span class="icon level-item">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                            </nav>
                          </div>
                        </article>
                      </div>
                      <div class="box">
                        <article class="media">
                          <div class="media-content">
                            <div class="content">
                              <p class="is-italic">
                                <strong>John Smith</strong>
                                <small>@johnsmith</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </div>
                            <nav class="level is-mobile">
                              <span class="icon level-item has-text-primary">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                              <span class="icon level-item has-text-primary">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                              <span class="icon level-item has-text-primary">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                              <span class="icon level-item has-text-primary">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                              <span class="icon level-item">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                            </nav>
                          </div>
                        </article>
                      </div>
                      <div class="box">
                        <article class="media">
                          <div class="media-content">
                            <div class="content">
                              <p class="is-italic">
                                <strong>John Smith</strong>
                                <small>@johnsmith</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </div>
                            <nav class="level is-mobile">
                              <span class="icon level-item has-text-primary">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                              <span class="icon level-item has-text-primary">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                              <span class="icon level-item has-text-primary">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                              <span class="icon level-item has-text-primary">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                              <span class="icon level-item">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                            </nav>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { faHandPeace } from "@fortawesome/free-regular-svg-icons"
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import {
  faStar,
  faHeart,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons"

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
    faStarSolid() {
      return faStar
    },
    faHeart() {
      return faHeart
    },
    faPlay() {
      return faPlayCircle
    },
  },
}
</script>
