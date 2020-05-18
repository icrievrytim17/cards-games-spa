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
                          {{ $t("home.introduction.title") }}
                        </strong>
                      </p>
                      <p class="title is-6 has-text-white">
                        {{ $t("home.introduction.text") }}
                      </p>
                    </div>
                  </div>
                  <div
                    class="tile is-parent has-text-centered is-vertical is-4"
                  >
                    <div class="tile is-child box has-background-black">
                      <p class="title has-text-white is-4">
                        {{ $t("home.share") }}
                      </p>
                      <a
                        href="https://twitter.com/intent/tweet?hashtags=playndrink&ref_src=twsrc%5Etfw&text=Play%20and%20drink%20online%20%3F%20Yes%20you%20can%20%3A)%20!%20Check%20out%20this%20fun%20website%20%3A%20https%3A%2F%2Fwww.playndrink.online%20&tw_p=tweetbutton&via=PlaynDrink1"
                        target="_blank"
                      >
                        <span class="icon share-twitter has-text-white">
                          <fa-icon :icon="faTwitter" class="fa-2x" />
                        </span>
                      </a>
                      &nbsp; &nbsp; &nbsp;
                      <a
                        href="https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fplayndrink.online%2F&display=popup&ref=plugin&src=share_button"
                        target="_blank"
                      >
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
                        {{ $t("home.title") }}
                      </p>
                      <hr />
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
                      <div
                        class="subtitle is-6"
                        v-html="$t('home.rules')"
                      ></div>
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
                            <span class="tag is-black">
                              {{ $t("home.players.min") }}
                            </span>
                          </div>
                        </div>
                        <div class="control">
                          <div class="tags has-addons">
                            <span class="tag is-link">MAX</span>
                            <span class="tag is-black">
                              {{ $t("home.players.max") }}
                            </span>
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
                        <span>{{ $t("home.play") }}</span>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="tile is-parent">
                    <div class="tile is-child box">
                      <p class="title is-6 has-text-centered">
                        They played it, they
                        <fa-icon
                          :icon="faHeart"
                          class="fa-lg has-text-primary"
                        />
                        it, and you will too!
                      </p>
                      <div class="card">
                        <div class="card-content">
                          <div class="media is-marginless">
                            <div class="media-left">
                              <img
                                src="/people/trump.jpg"
                                alt="Placeholder image"
                                width="64"
                              />
                            </div>
                            <div class="media-content">
                              <p class="title is-6">
                                Donald Trump
                              </p>
                              <p class="subtitle is-7 is-italic">
                                @donaldtrump
                              </p>
                            </div>
                          </div>
                          <div class="content">
                            <p class="is-italic text-opinion">
                              Everything bad you read about Play & Drink is fake
                              news ! Mexican people should create games like
                              that instead of invading our great country. God
                              bless you all!
                            </p>
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
                              <span class="icon level-item has-text-primary">
                                <fa-icon :icon="faHeart" class="fa-lg" />
                              </span>
                            </nav>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="card">
                        <div class="card-content">
                          <div class="media is-marginless">
                            <div class="media-left">
                              <img
                                src="/people/depardieu.jpg"
                                alt="Placeholder image"
                                width="64"
                              />
                            </div>
                            <div class="media-content">
                              <p class="title is-6">
                                Gérard Depardieu
                              </p>
                              <p class="subtitle is-7 is-italic">
                                @geraddepardieu
                              </p>
                            </div>
                          </div>
                          <div class="content">
                            <p class="is-italic text-opinion">
                              Je pensais que mes 5 litrons de rougeot allaient
                              me tenir la journée mais c'était avant de jouer à
                              Play & Drink ...
                            </p>
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
                        </div>
                      </div>
                      <br />
                      <div
                        class="card is-hidden-tablet-only is-hidden-desktop-only"
                      >
                        <div class="card-content">
                          <div class="media is-marginless">
                            <div class="media-left">
                              <img
                                src="/people/rolland.jpg"
                                alt="Placeholder image"
                                width="35"
                              />
                            </div>
                            <div class="media-content">
                              <p class="title is-6">
                                Thierry Rolland
                              </p>
                              <p class="subtitle is-7 is-italic">
                                @thierryrolland
                              </p>
                            </div>
                          </div>
                          <div class="content">
                            <p class="is-italic text-opinion">
                              Ha putain quel pied ! La naissance de ce site m'a
                              fait renaitre d'entre les morts, aucun doute,
                              après une partie de Play & Drink on peut mourrir
                              tranquille !
                            </p>
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
    </div>
  </section>
</template>
<script>
import { faHandPeace } from "@fortawesome/free-regular-svg-icons"
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faHeart, faPlayCircle } from "@fortawesome/free-solid-svg-icons"

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
    faHeart() {
      return faHeart
    },
    faPlay() {
      return faPlayCircle
    },
  },
}
</script>
