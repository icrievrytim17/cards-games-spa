<template>
  <div class="container">
    <div class="columns is-centered is-multiline is-marginless">
      <div class="column">
        <div class="tile is-ancestor">
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent is-8">
                <div class="tile is-child box">
                  <label
                    class="label title is-4 has-text-dark has-text-centered"
                  >
                    Rules : Red or Black
                  </label>
                  <hr />
                  <p>
                    For this game, you only need a <b>dealer</b>, this person
                    will launch and manage the game.
                  </p>
                  <p class="is-size-5 has-text-weight-bold">
                    How the game proceeds :
                  </p>
                  <div class="content">
                    <ol type="I">
                      <li>First part : the distribution</li>
                      <ol type="i">
                        <li><b>Red or black ?</b> (no need to explain ...)</li>
                        <li>
                          <b>More or less ?</b> (than the first card you draw)
                        </li>
                        <li>
                          <b>In or out ?</b> (the next card will be in or out,
                          the first two cards draw ?)
                        </li>
                        <li>
                          <b>What symbol ?</b> (Clubs, spades, diamonds, hearts)
                        </li>
                      </ol>
                      <p>
                        Si le joueur se trompe au premier tour, il boit 1 gorgé,
                        s’il gagne, il distribue 1 gorgé. Puis au deuxième tour
                        (le plus ou moins) même logique mais avec 2 gorgés… etc.
                      </p>
                      <li>Second part : the river</li>
                      <p>
                        Une fois que tous les joueurs ont 4 cartes en main, il
                        faut former deux colonnes avec les cartes (4 cartes par
                        colonne), et mettre 1 carte au milieu en fond de
                        colonne. Vous devez désigner 1 colonne pour « boire » et
                        l’autre pour « donner« . Retournez une carte en début de
                        colonne, tous les joueurs ayant cette carte doivent soit
                        boire soit donner en fonction de ce que vous avez
                        désigner bien sûr. La carte placée en fond de colonne au
                        milieu désigne un cul sec. Tous les joueurs ayant cette
                        carte doivent donc boire le verre cul sec ! J’espère que
                        ce jeu va vous plaire, hésitez pas à faire tourner vos
                        différentes règles, appellation du jeu…
                      </p>
                    </ol>
                  </div>
                </div>
              </div>
              <div class="tile is-parent">
                <div class="tile is-child box">
                  <label
                    class="label title is-4 has-text-dark has-text-centered"
                  >
                    Add players
                  </label>
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
                        class="button is-primary"
                        @click="addPlayer(newplayer)"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <label v-if="players.length > 0" class="label">
                    List of players
                  </label>
                  <div
                    v-for="player in players"
                    :key="player.id"
                    class="field card"
                  >
                    <header class="card-header has-text-centered">
                      <p class="card-header-title">
                        {{ player.name }}
                      </p>
                      <p class="card-header-icon">
                        <button
                          v-if="players.length - 1 === player.id"
                          class="button is-dark is-small"
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
                      class="button is-primary"
                      aria-label="Play - Jouer"
                      to="/room"
                    >
                      Let's do it
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import DeckJson from "../static/deck.json"

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
    //clear the deck
    this.$store.commit("deck/CLEAR")
    //clear the discard
    this.$store.commit("discard/CLEAR")
    //fill the deck with all the cards
    for (var i = 0; i < DeckJson.length; i++) {
      this.$store.commit("deck/ADD", DeckJson[i])
    }
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
