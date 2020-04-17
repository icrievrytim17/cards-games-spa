<template>
  <div class="card">
    <div class="card-content">
      <div>
        <br />
        <img width="30%" :src="getImgUrl(card.png)" :alt="card.number" />
      </div>
      <br />
      <div>
        <div class="content">
          <strong>River</strong>
          <br />
          <p v-if="!give">
            Prend {{ sip }}
            <span v-if="sip === 1">gorgée</span>
            <span v-if="sip !== 1">gorgées</span>
          </p>
          <p v-if="give">
            Donne <span>{{ sip }}</span>
            <span v-if="sip === 1">gorgée</span>
            <span v-if="sip !== 1">gorgées</span>
          </p>
        </div>
        <button
          v-if="deck.length > 0"
          class="button is-dark is-medium is-rounded"
          @click="pick"
        >
          Draw a card
        </button>
        <p v-if="deck.length === 0">C'est terminé. Merci d'avoir joué.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  props: {
    playerName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      card: "",
      sip: 1,
      round: 0,
      give: false,
    }
  },
  computed: {
    //GET pour récupérer dans le store le deck
    ...mapGetters({
      deck: "deck/get",
    }),
  },
  methods: {
    pick: function () {
      var chosenNumber = Math.floor(Math.random() * this.deck.length)
      this.card = this.deck[chosenNumber] // pick the card in the deck
      console.log(this.deck)
      this.$store.commit("deck/SPLICE", chosenNumber) // remove the card in the deck
      if (this.round !== 0) {
        this.give = !this.give
      }
      this.round++
      if (this.round > 1 && this.round % 2) {
        this.sip++
      }
      this.$emit("pick", this.card)
    },
    getImgUrl(imageName) {
      if (imageName !== undefined) {
        return "/cards/" + imageName
      }
    },
  },
}
</script>
