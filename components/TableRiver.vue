<template>
  <div class="card">
    <div class="card-content has-text-centered">
      <div v-if="draw > 0">
        <img width="40%" :src="getImgUrl(card.png)" :alt="card.number" />
      </div>
      <h3 v-if="draw === 0" class="title is-3">
        Début de la Rivière
      </h3>
      <br />
      <div class="content">
        <div v-if="round !== 0 && draw > 0">
          <div v-for="player in drinker" :key="player.id">
            <p v-if="!give">
              {{ player.name }} prends {{ player.sip }}
              <span v-if="player.sip === 1">gorgée</span>
              <span v-if="player.sip > 1">gorgées</span>
            </p>
            <p v-if="give">
              {{ player.name }} donne <span>{{ player.sip }}</span>
              <span v-if="player.sip === 1">gorgée</span>
              <span v-if="player.sip > 1">gorgées</span>
            </p>
          </div>
        </div>
        <br v-if="draw <= 11" />
        <button
          v-if="deck.length > 0 && draw === 0"
          class="button is-dark is-medium"
          @click="pick"
        >
          Commencer
        </button>
        <button
          v-if="deck.length > 0 && draw > 0 && draw <= 11"
          class="button is-dark is-medium"
          @click="pick"
        >
          Tirer une carte
        </button>
        <div v-if="deck.length === 0 || draw > 11">
          <hr />
          <p class="content is-medium">
            C'est terminé. Merci d'avoir joué.
          </p>
          <nuxt-link
            to="/add-player"
            class="button is-primary is-medium is-rounded"
          >
            <span>Nouvelle partie</span>
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
                if (element.card.color === this.card.color) {
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
            if (element.card.color === this.card.color) {
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
        console.log(player)
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
