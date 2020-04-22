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
          <strong>Rivière</strong>
          <br />
          <div v-if="round !== 0">
            <div v-for="player in drinker" :key="player.id">
              <p v-if="!give">
                {{ player.name }} prends {{ player.count * sip }}
                <span v-if="sip === 1">gorgée</span>
                <span v-if="sip !== 1">gorgées</span>
              </p>
              <p v-if="give">
                {{ player.name }} donne <span>{{ player.count * sip }}</span>
                <span v-if="sip === 1">gorgée</span>
                <span v-if="sip !== 1">gorgées</span>
              </p>
            </div>
          </div>
        </div>
        <button
          v-if="deck.length > 0 && draw <= 11"
          class="button is-dark is-medium is-rounded"
          @click="pick"
        >
          Tirer une carte
        </button>
        <p v-if="deck.length === 0 || draw > 11">
          C'est terminé. Merci d'avoir joué.
        </p>
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
    }),
  },
  methods: {
    pick: function () {
      var chosenNumber = Math.floor(Math.random() * this.deck.length)
      this.card = this.deck[chosenNumber] // pick the card in the deck
      this.$store.commit("deck/SPLICE", chosenNumber) // remove the card in the deck
      this.getDrinker() // get which player will drink at every round
      if (this.drinker.length !== 0) {
        // if nobody give or take, dont go to the next round, pick again
        if (this.round !== 0) {
          this.give = !this.give // switch give to take but not in the first pick
        }
        this.round++
        if (this.round > 1 && this.round % 2) {
          // sip++ every two rounds
          this.sip++
        }
        this.draw++ // draw++ when someone take or give sip. 12 draws max
        this.$emit("pick", this.card)
      } else {
        this.pick() // pick a new card if nobody take or give sup
      }
    },
    getDrinker: function () {
      this.drinker = [] // empty initialise for every round
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
                if (element.card.color === this.card.color) {
                  drinker.count = drinker.count + 2
                } else {
                  drinker.count++
                }
              }
            }
          }
          if (!find) {
            var count = 1
            if (element.card.color === this.card.color) {
              count = 2
            }
            this.drinker.push({
              id: index,
              name: this.players[index].name,
              count: count,
            })
          }
        }
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
