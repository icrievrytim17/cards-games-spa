<template>
  <div class="card">
    <div class="card-content has-text-centered">
      <div v-if="draw > 0">
        <img width="40%" :src="getImgUrl(card.png)" :alt="card.number" />
      </div>
      <h3 v-if="draw === 0" class="title is-3">
        Start the river
      </h3>
      <br />
      <div class="content">
        <div v-if="round !== 0 && draw > 0 && drinker.length > 0">
          <div v-for="player in drinker" :key="player.id">
            <p v-if="!give">
              {{ player.name }} drink {{ player.sip }}
              <span v-if="player.sip === 1">sip</span>
              <span v-if="player.sip > 1">sips</span>
            </p>
            <p v-if="give">
              {{ player.name }} give <span>{{ player.sip }}</span>
              <span v-if="player.sip === 1">sip</span>
              <span v-if="player.sip > 1">sips</span>
            </p>
          </div>
        </div>
        <div v-if="round !== 0 && draw > 0 && drinker.length === 0">
          Nobody drink
        </div>
        <br v-if="draw <= 11 || getAllCards" />
        <button
          v-if="deck.length > 0 && draw === 0"
          class="button is-dark is-medium"
          @click="pick"
        >
          Start
        </button>
        <button
          v-if="deck.length > 0 && draw > 0 && (getAllCards || draw <= 11)"
          class="button is-dark is-medium"
          @click="pick"
        >
          Pick a card
        </button>
        <div v-if="deck.length === 0 || (!getAllCards && draw > 11)">
          <hr />
          <p class="content is-medium">
            It's over. Thanks to have play.
          </p>
          <nuxt-link
            to="/add-player"
            class="button is-primary is-medium is-rounded"
          >
            <span>Restart</span>
          </nuxt-link>
        </div>
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
      round: 1,
      give: false,
      drinker: [],
      draw: 0,
    }
  },
  computed: {
    //GET all the store elements
    ...mapGetters({
      deck: "deck/get",
      players: "players/get",
      discard: "discard/get",
      doubleColor: "options/getDoubleColor",
      getAllCards: "options/getAllCard",
      getNoRest: "options/getNoRest",
    }),
  },
  methods: {
    pick: function () {
      var chosenNumber = Math.floor(Math.random() * this.deck.length)
      this.card = this.deck[chosenNumber] // pick the card in the deck
      this.$store.commit("deck/SPLICE", chosenNumber) // remove the card in the deck
      this.getDrinker() // get which player will drink at every round
      console.log("REST :" + this.getNoRest)
      console.log("DoubleColor :" + this.doubleColor)
      console.log("All cards :" + this.getAllCards)
      if (this.drinker.length !== 0 || !this.getNoRest) {
        // getNoRest negation to redraw
        // if nobody give or take, dont go to the next round, pick again
        if (this.round !== 1) {
          this.give = !this.give // switch give to take but not in the first pick
        }
        this.updateStatusDrinker()
        this.round++
        if (this.round > 1 && this.round % 2) {
          // sip++ every two rounds
          this.sip++
        }
        this.draw++ // draw++ when someone take or give sip. 12 draws max
        this.$emit("render", this.card)
      } else {
        this.pick() // pick a new card if nobody take or give sup
      }
    },
    getDrinker: function () {
      this.drinker = [] // empty initialise for every round
      this.resetDrinker()
      for (const element of this.discard) {
        if (element.card.number === this.card.number) {
          var index = element.player // get id player in discard array
          var find = false
          if (this.drinker.length !== 0) {
            for (const drinker of this.drinker) {
              //loop in drinker's array if the player have the same card twice
              if (drinker.id === index) {
                // if we have the same player in the array
                find = true
                if (
                  element.card.color === this.card.color &&
                  this.doubleColor
                ) {
                  drinker.count = drinker.count + 2
                } else {
                  drinker.count++
                }
                drinker.sip = this.sip * drinker.count
              }
            }
          }
          if (!find) {
            var count = 1
            if (element.card.color === this.card.color && this.doubleColor) {
              count = 2
            }
            this.drinker.push({
              id: index,
              name: this.players[index].name,
              count: count,
              sip: this.sip * count,
            })
          }
        }
      }
    },
    resetDrinker() {
      for (const player of this.players) {
        var argsStatePlayer = { id: player.id, state: "Waiting" }
        this.$store.commit("players/updatePlayerState", argsStatePlayer)
      }
    },
    updateStatusDrinker() {
      var argsStatePlayer
      for (const drinker of this.drinker) {
        if (this.give) {
          argsStatePlayer = { id: drinker.id, state: "Give" }
        } else {
          argsStatePlayer = { id: drinker.id, state: "Drink" }
        }
        this.$store.commit("players/updatePlayerState", argsStatePlayer)
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
