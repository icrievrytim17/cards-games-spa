<template>
  <div class="card">
    <div class="card-content has-text-centered">
      <div v-if="showPickResult" class="">
        <img width="40%" :src="getImgUrl(card.png)" :alt="card.name" />
      </div>
      <div v-if="!showPickResult">
        <img width="40%" src="/cards-back/red_back.png" />
      </div>
      <h2 v-if="!showPickResult" class="title is-3">
        {{ $t("table.title") }}
      </h2>
      <div v-if="showPickResult" class="has-text-centered">
        <div v-if="pickResult === 'Fail'">
          <p
            class="content is-medium is-marginless has-text-centered"
            v-html="$t('table.fail')"
          ></p>
          {{ $t("table.drink", { player: lastPlayer, sip: sip }) }}
          <span v-if="sip === 1" v-html="$t('table.sip')"></span>
          <span v-if="sip !== 1" v-html="$t('table.sips')"></span>
        </div>
        <div v-if="pickResult === 'Win'">
          <p
            class="content is-medium is-marginless has-text-centered"
            v-html="$t('table.win')"
          ></p>
          {{ $t("table.give", { player: lastPlayer, sip: sip }) }}
          <span v-if="sip === 1" v-html="$t('table.sip')"></span>
          <span v-if="sip !== 1" v-html="$t('table.sips')"></span>
        </div>
      </div>
      <hr />
      <div v-if="player.name != '' && draw < 5" class="has-text-centered">
        <p v-html="$t('table.next', { player: player.name })"></p>
        <br />
        <span v-if="draw === 1" class="content is-medium">
          {{ $t("table.redBlack") }}
        </span>
        <span v-if="draw === 2" class="content is-medium">
          {{ $t("table.moreLess", { card: sortedCards[0].name }) }}
        </span>
        <span v-if="draw === 3" class="content is-medium">
          {{
            $t("table.inOut", {
              card0: sortedCards[0].name,
              card1: sortedCards[1].name,
            })
          }}
        </span>
        <span v-if="draw === 4" class="content is-medium">
          {{ $t("table.sign") }}
        </span>
      </div>
      <br />
      <div v-if="draw === 1" class="has-text-centered">
        <div class="">
          <button
            class="button is-primary is-medium is-table"
            @click="distribute('rouge')"
          >
            {{ $t("table.red") }}
          </button>
          <button
            class="button is-dark is-medium is-table"
            @click="distribute('noir')"
          >
            {{ $t("table.black") }}
          </button>
        </div>
      </div>
      <div v-if="draw === 2" class="has-text-centered">
        <button
          class="button is-dark is-medium is-table"
          @click="distribute('moins')"
        >
          <span class="icon">
            <fa-icon :icon="faMinus" />
          </span>
        </button>
        <button
          class="button is-dark is-medium is-table"
          @click="distribute('plus')"
        >
          <span class="icon">
            <fa-icon :icon="faPlus" />
          </span>
        </button>
      </div>
      <!-- eslint-disable -->
      <div v-if="draw === 3" class="has-text-centered">
        <button
          class="button is-dark is-medium is-table"
          @click="distribute('int')"
        >
          {{ $t("table.in") }}
        </button>
        <button
          class="button is-dark is-medium is-table"
          @click="distribute('ext')"
        >
          {{ $t("table.out") }}
        </button>
      </div>
      <!-- eslint-enable -->
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
          {{ $t("table.river") }}
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
      pickResult: "Fail",
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
      this.pickResult = "Fail"
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
        this.pickResult = "Win"
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
