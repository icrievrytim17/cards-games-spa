<template>
  <div class="container">
    <div class="columns is-centered is-multiline">
      <div class="column is-half">
        <div class="box has-text-centered">
          <label class="label">Add players</label>
          <hr />
          <p>
            Players min = 2 / Players max = 10
          </p>
          <br />
          <div class="field is-grouped">
            <div class="control is-expanded">
              <input
                v-model="newplayer"
                class="input"
                type="text"
                maxlength="20"
                placeholder="New player"
                @keyup.enter="
                  !nbrMaxPlayers && newplayer.length > 0
                    ? addPlayer(newplayer)
                    : ''
                "
              />
            </div>
            <div class="control">
              <button
                :disabled="nbrMaxPlayers || newplayer.length === 0"
                :required="newplayer.length > 0"
                class="button is-black"
                @click="addPlayer(newplayer)"
              >
                Add
              </button>
            </div>
          </div>
          <label v-if="players.length > 0" class="label">List of players</label>
          <div v-for="player in players" :key="player.id" class="field card">
            <header class="card-header has-text-centered">
              <p class="card-header-title">
                {{ player.name }}
              </p>
              <p class="card-header-icon">
                <button
                  v-if="players.length - 1 === player.id"
                  class="button is-danger is-small"
                  aria-label="Delete player"
                  @click="deleteLastPlayer(player.id)"
                >
                  Delete
                </button>
              </p>
            </header>
          </div>
          <div class="field">
            <nuxt-link
              v-if="nbrMiniPlayers"
              class="button is-black"
              aria-label="Play - Jouer"
              to="/room"
            >
              Play
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      newplayer: "",
      playerCount: 0,
    }
  },
  computed: {
    ...mapGetters({
      players: "players/get",
    }),
    //Return true if min player (2)
    nbrMiniPlayers: function () {
      if (this.playerCount > 1) {
        return true
      }
      return false
    },
    //Return true if max player added (10)
    nbrMaxPlayers: function () {
      if (this.playerCount > 9) {
        console.log(this.playerCount)
        return true
      }
      return false
    },
  },
  created() {
    //when arriving on this page, we clear the players in the store
    this.$store.commit("players/clear")
  },
  methods: {
    addPlayer: function (player) {
      //Default state
      let state = "Waiting"
      if (this.playerCount === 0) {
        //State if first player
        state = "Playing"
      }
      //Add players for the game
      this.$store.commit("players/add", {
        id: this.playerCount,
        name: player,
        state: state,
        cards: [],
      })
      //Increment player count for next player id
      this.playerCount++
      //Empty the input text
      this.newplayer = ""
    },
    deleteLastPlayer: function (key) {
      //delete player from table
      this.$store.commit("players/splice", key)
      //Decrement the number of player
      this.playerCount--
    },
  },
}
</script>
