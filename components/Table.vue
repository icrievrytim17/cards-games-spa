<template>
  <div class="card">
    <div class="card-content">
      <div>
        <br />
        <img width="30%" :src="getImgUrl(card.png)" :alt="card.number" />
      </div>
      <br />
      <div v-if="showPickResult" class="content">
        {{ lastPlayer }} <strong>{{ pickResult }}</strong>
        <p v-if="pickResult === 'Perdu'">
          Prend {{ sip }}
          <span v-if="sip === 1">gorgée</span>
          <span v-if="sip !== 1">gorgées</span>
        </p>
        <p v-if="pickResult === 'Gagné'">
          Donne {{ sip }}
          <span v-if="sip === 1">gorgée</span>
          <span v-if="sip !== 1">gorgées</span>
        </p>
      </div>
      <div v-if="player.name != '' && round === 0" class="content">
        C'est au tour de <strong>{{ player.name }}</strong>
      </div>
      <div v-if="draw === 1">
        <button
          class="button is-primary is-medium is-rounded"
          @click="distribute('rouge')"
        >
          Rouge
        </button>
        <button
          class="button is-dark is-medium is-rounded"
          @click="distribute('noir')"
        >
          Noir
        </button>
      </div>
      <div v-if="draw === 2">
        <button
          class="button is-dark is-medium is-rounded"
          @click="distribute('plus')"
        >
          Plus
        </button>
        <button
          class="button is-dark is-medium is-rounded"
          @click="distribute('moins')"
        >
          Moins
        </button>
      </div>
      <div v-if="draw === 3">
        <button
          class="button is-dark is-medium is-rounded"
          @click="distribute('int')"
        >
          Intérieur
        </button>
        <button
          class="button is-dark is-medium is-rounded"
          @click="distribute('ext')"
        >
          Extérieur
        </button>
      </div>
      <div v-if="draw === 4">
        <button
          class="button is-dark is-medium is-rounded"
          @click="distribute('coeur')"
        >
          Coeur
        </button>
        <button
          class="button is-dark is-medium is-rounded"
          @click="distribute('carreau')"
        >
          Carreau
        </button>
        <button
          class="button is-dark is-medium is-rounded"
          @click="distribute('trefle')"
        >
          Trèfle
        </button>
        <button
          class="button is-dark is-medium is-rounded"
          @click="distribute('pique')"
        >
          Pique
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Deck from "./../deck.json"
import _sortBy from "lodash.sortby"
export default {
  props: {
    player: {
      type: Object,
      default() {},
    },
    draw: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      deck: Deck,
      card: "",
      pickResult: "Perdu",
      showPickResult: false,
      lastPlayer: "",
      round: 0,
      sip: 1,
      give: false,
    }
  },
  methods: {
    distribute: function (choice) {
      this.pick()
      this.showResult(choice)
      this.$emit("pick", this.card)
    },
    pick: function () {
      var chosenNumber = Math.floor(Math.random() * this.deck.length)
      this.card = this.deck[chosenNumber] // pick the card in the deck
      this.deck.splice(chosenNumber, 1) // remove the card in the deck
    },
    showResult: function (choice) {
      console.log(choice)
      var result = ""
      this.lastPlayer = this.player.name
      this.showPickResult = true
      this.pickResult = "Perdu"
      if (this.draw === 1) {
        console.log("Premier tirage Rouge ou Noir")
        result = this.card.color
      } else if (this.draw === 2) {
        console.log("Deuxième tirage Plus ou Moins")
        result = "moins"
        if (this.card.number > this.player.cards[0].number) {
          result = "plus"
        }
      } else if (this.draw === 3) {
        console.log("Troisième tirage Intérieur ou Extérieur")
        var array = _sortBy(this.player.cards, "number")
        result = "ext"
        if (
          array[0].number < this.card.number &&
          this.card.number < array[1].number
        ) {
          result = "int"
        }
      } else if (this.draw === 4) {
        console.log("Quatrième tirage Rouge ou Noir")
        result = this.card.sign
      }
      if (choice === result) {
        this.pickResult = "Gagné"
      }
      this.sip = this.draw
      console.log(this.pickResult)
    },
    getImgUrl(imageName) {
      if (imageName !== undefined) {
        return "/cards/" + imageName
      }
    },
  },
}
</script>
