<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column">
            <div class="box has-text-centered">
              <p>
                Salut ! On est deux français &nbsp;&nbsp;
                <img src="/france.png" width="25" height="25" alt="Logo" />
                &nbsp;&nbsp; qui aiment profiter des plaisirs des soirées entre
                amis. Vous pouvez le voir sur l'image ci-dessous...
              </p>
              <br />
              <p>
                Puis le confinement est arrivé
                <fa-icon :icon="faSadCry" class="fa-lg has-text-black" />
                , on s'est donc dit, on a envie de jouer avec nos potes à
                distance. On va faire un site de jeux de cartes en ligne. Même
                pas besoin de jeux de cartes. WTF !
              </p>
              <p>
                On espère que vous allez kiffé le site. Si vous connaissez des
                jeux de cartes de soirées marants, n'hésitez pas à le partager
                avec nous. Peut-être qu'on l'ajoutera au site :D.
              </p>
              <br />
              <p>
                On remercie particulièrement ceux qui nous ont aidés pour
                réaliser ce site : <b>Dam</b>, <b>Emeline</b>, <b>Mélanie</b> et
                <b>Julian</b>
                <fa-icon :icon="faHeart" class="fa-lg has-text-primary" />.
              </p>
              <br />
              <p>Petite dedicasse à tout nos potes :</p>
              <br />
              <img src="/mej.png" alt="" width="800" />
              <br />
              <br />
              <p class="has-text-weight-bold">
                Built with :&nbsp;&nbsp;
              </p>
              <br />
              <div class="level">
                <div class="level-item">
                  <a href="https://nuxtjs.org/" target="_blank">
                    <img
                      src="/nuxtjs-typo.svg"
                      alt="Nuxtjs is an open source framework making web development simple and powerful."
                      width="134"
                    />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="https://bulma.io/" target="_blank">
                    <img
                      src="https://bulma.io/images/bulma-logo.png"
                      alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
                      width="94"
                    />
                  </a>
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
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faSadCry } from "@fortawesome/free-regular-svg-icons"
export default {
  computed: {
    faHeart() {
      return faHeart
    },
    faSadCry() {
      return faSadCry
    },
  },
}
</script>
