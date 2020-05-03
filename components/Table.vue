<template>
  <div class="card">
    <div class="card-content has-text-centered">
      <div v-if="showPickResult" class="">
        <img width="40%" :src="getImgUrl(card.png)" :alt="card.name" />
      </div>
      <h3 v-if="!showPickResult" class="title is-3">
        Début de la distribution
      </h3>
      <div v-if="showPickResult" class="has-text-centered">
        <p class="content is-medium is-marginless">
          <strong>{{ pickResult }}</strong>
        </p>
        <p v-if="pickResult === 'Perdu'">
          {{ lastPlayer }} prend {{ sip }}
          <span v-if="sip === 1">gorgée</span>
          <span v-if="sip !== 1">gorgées</span>
        </p>
        <p v-if="pickResult === 'Gagné'">
          {{ lastPlayer }} donne {{ sip }}
          <span v-if="sip === 1">gorgée</span>
          <span v-if="sip !== 1">gorgées</span>
        </p>
      </div>
      <hr />
      <div v-if="player.name != '' && draw < 5" class="has-text-centered">
        C'est au tour de <strong>{{ player.name }}</strong>
        <br />
        <span v-if="draw === 1" class="content is-medium">
          Rouge ou noir
        </span>
        <span v-if="draw === 2" class="content is-medium">
          Plus ou moins que {{ sortedCards[0].name }}
        </span>
        <span v-if="draw === 3" class="content is-medium">
          Intérieur entre {{ sortedCards[0].name }} et
          {{ sortedCards[1].name }} ou à l'extérieur
        </span>
        <span v-if="draw === 4" class="content is-medium">
          Coeur, Carreau, Trèfle ou Pique
        </span>
      </div>
      <br />
      <div v-if="draw === 1" class="has-text-centered">
        <div class="">
          <button
            class="button is-primary is-medium is-table"
            @click="distribute('rouge')"
          >
            Rouge
          </button>
          <button
            class="button is-dark is-medium is-table"
            @click="distribute('noir')"
          >
            Noir
          </button>
        </div>
      </div>
      <div v-if="draw === 2" class="columns is-centered">
        <div class="column is-half">
          <div class="field is-grouped">
            <button
              class="level-item button is-dark is-medium is-table"
              @click="distribute('moins')"
            >
              <span class="icon">
                <fa-icon :icon="faMinus" />
              </span>
            </button>
            <div class="level-item has-background-black has-text-white">
              {{ sortedCards[0].name }} &nbsp;
              <img
                v-if="sortedCards[0].sign === 'coeur'"
                src="/heart.png"
                width="20%"
                alt="Coeur"
              />
              <img
                v-if="sortedCards[0].sign === 'carreau'"
                src="/diamond.png"
                width="20%"
                alt="Carreau"
              />
              <img
                v-if="sortedCards[0].sign === 'trefle'"
                src="/clover.png"
                width="20%"
                alt="Trefle"
              />
              <img
                v-if="sortedCards[0].sign === 'pique'"
                src="/spade.png"
                width="20%"
                alt="Pique"
              />
            </div>
            <button
              class="level-item button is-dark is-medium is-table"
              @click="distribute('plus')"
            >
              <span class="icon">
                <fa-icon :icon="faPlus" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div v-if="draw === 3" class="columns is-centered">
        <div class="column is-half">
          <div class="field is-grouped">
            <button
              class="button is-dark is-medium is-table"
              @click="distribute('int')"
            >
              Intérieur
            </button>
            <button
              class="button is-dark is-medium is-table"
              @click="distribute('ext')"
            >
              Extérieur
            </button>
          </div>
        </div>
      </div>
      <div v-if="draw === 4" class="has-text-centered">
        <div class="">
          <button
            class="button is-primary is-medium is-table"
            @click="distribute('coeur')"
          >
            <img src="/heart.png" width="50%" alt="Coeur" />
          </button>
          <button
            class="button is-primary is-medium is-table"
            @click="distribute('carreau')"
          >
            <img src="/diamond.png" width="50%" alt="Carreau" />
          </button>
        </div>
        <br />
        <button
          class="button is-dark is-medium is-table"
          @click="distribute('trefle')"
        >
          <img src="/clover.png" width="50%" alt="Trefle" />
        </button>
        <button
          class="button is-dark is-medium is-table"
          @click="distribute('pique')"
        >
          <img src="/spade.png" width="50%" alt="Pique" />
        </button>
      </div>
      <div v-if="draw === 5" class="columns is-centered">
        <button
          class="button is-primary is-medium is-rounded"
          @click="goToRiver"
        >
          Passer à la rivière
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import _sortBy from "lodash.sortby"
import { mapGetters } from "vuex"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
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
      card: "",
      pickResult: "Perdu",
      showPickResult: false,
      lastPlayer: "",
      sip: 1,
    }
  },
  computed: {
    //GET pour récupérer dans le store le deck
    ...mapGetters({
      deck: "deck/get",
    }),
    sortedCards: function () {
      return _sortBy(this.player.cards, "number")
    },
    faPlus() {
      return faPlus
    },
    faMinus() {
      return faMinus
    },
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
      this.$store.commit("deck/SPLICE", chosenNumber) // remove the card in the deck
    },
    showResult: function (choice) {
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
    },
    goToRiver: function () {
      this.$emit("go-river")
    },
    getImgUrl(imageName) {
      if (imageName !== undefined) {
        return "/cards/" + imageName
      }
    },
  },
}
</script>
