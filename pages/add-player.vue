<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column">
            <div class="tile is-ancestor">
              <div class="tile is-vertical">
                <div class="tile">
                  <div class="tile is-parent is-8">
                    <div class="tile is-child box">
                      <div class="level">
                        <div class="level-item">
                          <label
                            class="label title is-4 has-text-dark has-text-centered"
                          >
                            Rules : Red or Black
                          </label>
                          &nbsp;
                          <span class="dot red"></span>
                          &nbsp;
                          <span class="dot black"></span>
                        </div>
                      </div>
                      <hr />
                      <p>
                        For this game, you only need a <b>dealer</b>, this
                        person will manage the game.
                      </p>
                      <br />
                      <p
                        class="is-size-5 has-text-weight-bold has-text-primary"
                      >
                        How the game proceeds :
                      </p>
                      <div class="content">
                        <ol type="I">
                          <li class="is-size-5 has-text-weight-bold">
                            First part : the distribution
                          </li>
                          <ul>
                            <li>
                              <b>Red or black ?</b> (no need to explain ...)
                            </li>
                            <li>
                              <b>More or less ?</b> (than the first card you
                              draw)
                            </li>
                            <li>
                              <b>In or out ?</b> (the next card will be in or
                              out, the first two cards draw ?)
                            </li>
                            <li>
                              <b>What symbol ?</b> (Clubs, spades, diamonds,
                              hearts)
                            </li>
                          </ul>
                          <p>
                            If the player makes a mistake in the first round, he
                            drinks one sip, if he wins, he distributes one sip.
                            Then in the second round (more or less) same logic
                            but with two sips…
                          </p>
                          <li class="is-size-5 has-text-weight-bold">
                            Second part : the river
                          </li>
                          <br />
                          <p>
                            When everyone has four cards,
                            <b>the river begins</b>. The game is divided into
                            <b>six rounds</b>. On each round, the first draw
                            indicates who must give sips, the second draw
                            indicates who must take sips.
                          </p>
                          <p class="is-size-6 has-text-weight-bold">
                            How do I know if I am giving or taking a sip?
                          </p>
                          <p>
                            It's simple, if you have in your hand, one or more
                            cards of the same rank, you take or give.
                          </p>
                          <p class="is-size- has-text-weight-bold">
                            How many sip i need to take or give ?
                          </p>
                          <p>
                            The number of sips given or taken by card
                            <b>increases by one per round</b>, we
                            <b>start</b> by giving or taking
                            <b>one sip per card of the same rank.</b>
                          </p>
                        </ol>
                      </div>
                      <p
                        class="is-size-5 has-text-weight-bold has-text-primary"
                      >
                        Other rules you should know :
                      </p>
                      <div class="content">
                        <ul>
                          <p>
                            <b>The ace is the number one</b> in our game, so
                            it's the smallest card.
                          </p>
                        </ul>
                      </div>
                      <p>
                        There you go, you have all the rules of our game. We
                        know there are different versions around the world. So
                        if you have different rules, or funny rules. Feel free
                        to share it with us.
                        <b>Enjoy.</b>
                      </p>
                    </div>
                  </div>
                  <div class="tile is-parent is-vertical">
                    <div class="tile is-child box">
                      <div class="level">
                        <div class="level-item">
                          <label
                            class="label title is-4 has-text-dark has-text-centered"
                          >
                            {{ $t("addPlayer.rules.title") }}
                          </label>
                          &nbsp; &nbsp;
                          <span class="icon">
                            <fa-icon
                              class="fa-lg has-text-primary"
                              :icon="faPepperHot"
                            />
                          </span>
                        </div>
                      </div>
                      <hr />
                      <div class="level">
                        <div class="level-left">
                          <div class="level-item">
                            <label class="switch">
                              <input v-model="doubleColor" type="checkbox" />
                              <span class="slider round"></span>
                            </label>
                            &nbsp; &nbsp;
                            <label class="label">
                              {{ $t("addPlayer.rules.doubleTap.title") }}
                            </label>
                          </div>
                        </div>
                      </div>
                      <p>
                        {{ $t("addPlayer.rules.doubleTap.text") }}
                      </p>
                      <br />
                      <div class="level">
                        <div class="level-left">
                          <div class="level-item">
                            <label class="switch">
                              <input v-model="allCard" type="checkbox" />
                              <span class="slider round"></span>
                            </label>
                            &nbsp; &nbsp;
                            <label class="label">
                              {{ $t("addPlayer.rules.lastCard.title") }}
                            </label>
                          </div>
                        </div>
                      </div>
                      <p>
                        {{ $t("addPlayer.rules.lastCard.text") }}
                      </p>
                      <br />
                      <div class="level">
                        <div class="level-left">
                          <div class="level-item">
                            <label class="switch">
                              <input v-model="noRest" type="checkbox" />
                              <span class="slider round"></span>
                            </label>
                            &nbsp; &nbsp;
                            <label class="label">
                              {{ $t("addPlayer.rules.rest.title") }}
                            </label>
                          </div>
                        </div>
                      </div>
                      <p>
                        {{ $t("addPlayer.rules.rest.text") }}
                      </p>
                    </div>
                    <div class="tile is-child box">
                      <label
                        class="label title is-4 has-text-dark has-text-centered"
                      >
                        {{ $t("addPlayer.players.title") }}
                      </label>
                      <hr />
                      <p>
                        <b>{{ $t("addPlayer.players.min") }}</b> = 2 /
                        <b>{{ $t("addPlayer.players.max") }}</b> = 10
                      </p>
                      <br />
                      <div class="field is-grouped">
                        <div class="control is-expanded">
                          <input
                            v-model="newplayer"
                            class="input"
                            type="text"
                            maxlength="20"
                            :placeholder="$t('addPlayer.players.placeholder')"
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
                            {{ $t("addPlayer.players.button") }}
                          </button>
                        </div>
                      </div>
                      <label v-if="players.length > 0" class="label">
                        {{ $t("addPlayer.players.list") }}
                      </label>
                      <div class="field is-grouped is-grouped-multiline">
                        <div
                          v-for="player in players"
                          :key="player.id"
                          class="control"
                        >
                          <div class="tags has-addons">
                            <a class="tag is-primary">{{ player.name }}</a>
                            <a
                              v-if="players.length - 1 === player.id"
                              class="tag is-delete"
                              aria-label="Delete this player"
                              title="Delete this player"
                              @click="deleteLastPlayer(player.id)"
                            >
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="field has-text-centered">
                        <nuxt-link
                          v-if="nbrMiniPlayers"
                          class="button is-black is-medium is-rounded"
                          aria-label="Play - Jouer"
                          to="/room"
                        >
                          <span class="icon">
                            <fa-icon :icon="faPlay" />
                          </span>
                          <span>Play</span>
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
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex"
import { faPepperHot, faPlayCircle } from "@fortawesome/free-solid-svg-icons"
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
      noRestFromStore: "options/getNoRest",
      allCardFromStore: "options/getAllCard",
      doubleColorFromStore: "options/getDoubleColor",
    }),
    noRest: {
      get() {
        return this.noRestFromStore
      },
      set(bool) {
        this.$store.commit("options/setNoRest", bool)
        return bool
      },
    },
    allCard: {
      get() {
        return this.allCardFromStore
      },
      set(bool) {
        this.$store.commit("options/setAllCard", bool)
        return bool
      },
    },
    doubleColor: {
      get() {
        return this.doubleColorFromStore
      },
      set(bool) {
        this.$store.commit("options/setDoubleColor", bool)
        return bool
      },
    },
    faPepperHot() {
      return faPepperHot
    },
    faPlay() {
      return faPlayCircle
    },
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
