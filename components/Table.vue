<template>
  <div class="card">
    <div class="card-content">
      <div>
        <br />
        <img width="30%" :src="getImgUrl(card.png)" :alt="card.number" />
      </div>
      <br />
      <div v-if="playerName != '' && !river && round === 0" class="content">
        C'est au tour de <strong>{{ playerName }}</strong>
      </div>
      <div v-if="river && round === 0" class="content">
        La distribution est terminée. Place à la <strong>River</strong>
      </div>
      <div v-if="river && round > 0" class="content">
        <strong>River</strong>
        <br />
        <p v-if="!give">
          Prend {{ sip }}
          <span v-if="sip === 1">gorgée</span>
          <span v-if="sip !== 1">gorgées</span>
        </p>
        <p v-if="give">
          Donne<span>{{ sip }}</span>
          <span v-if="sip === 1">gorgée</span>
          <span v-if="sip !== 1">gorgées</span>
        </p>
      </div>
      <button
        v-if="!river"
        class="button is-dark is-medium is-rounded"
        @click="distribute"
      >
        Draw a card
      </button>
      <button
        v-if="river"
        class="button is-dark is-medium is-rounded"
        @click="pickRiver"
      >
        Draw a card
      </button>
    </div>
  </div>
</template>

<script>
import Deck from "./../deck.json"
export default {
  props: {
    playerName: {
      type: String,
      default: "",
    },
    river: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      deck: Deck,
      card: "",
      sip: 1,
      round: 0,
      give: false,
    }
  },
  methods: {
    distribute: function () {
      this.pick()
      this.$emit("pick", this.card)
    },
    pick: function () {
      var chosenNumber = Math.floor(Math.random() * this.deck.length)
      this.card = this.deck[chosenNumber] // pick the card in the deck
      this.deck.splice(chosenNumber, 1) // remove the card in the deck
    },
    pickRiver: function () {
      console.log("pick for the rive")
      this.pick()
      if (this.round !== 0) {
        this.give = !this.give
      }
      this.round++
      if (this.round > 1 && this.round % 2) {
        this.sip++
      }
    },
    getImgUrl(imageName) {
      if (imageName !== undefined) {
        return "/cards/" + imageName
      }
    },
  },
}
</script>
