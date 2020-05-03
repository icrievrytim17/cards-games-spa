<template>
  <div class="container">
    <div class="columns is-multiline is-mobile is-marginless">
      <div class="column is-one-third-desktop is-full-mobile">
        <Table
          v-if="!river"
          :draw="draw"
          :player="players[round]"
          @pick="pickACard"
          @go-river="showRiver"
        />
        <TableRiver v-if="river" :player-name="name" @pick="pickACard" />
      </div>
      <div
        v-for="player in players"
        :key="player.id"
        class="column is-one-fifth-desktop is-full-mobile"
      >
        <Player :player="player" />
      </div>
    </div>
  </div>
</template>

<script>
import Player from "~/components/Player.vue"
import Table from "~/components/Table.vue"
import TableRiver from "~/components/TableRiver.vue"
import { mapGetters } from "vuex"
export default {
  components: {
    Player,
    Table,
    TableRiver,
  },
  data() {
    return {
      card: "",
      round: 0,
      draw: 1,
      river: false,
      name: "",
    }
  },
  computed: {
    //GET pour récupérer dans le store la liste players
    ...mapGetters({
      players: "players/get",
      discard: "discard/get",
    }),
  },
  created: function () {
    this.name = this.players[this.round].name
  },
  methods: {
    pickACard: function (cardPicked) {
      let argsAddCard = { id: this.round, card: cardPicked }
      this.$store.commit("players/addcard", argsAddCard)
      let argsStatePlayer = { id: this.round, state: "Waiting" }
      this.$store.commit("players/updatePlayerState", argsStatePlayer)
      this.$store.commit("discard/ADD", {
        player: this.round,
        card: cardPicked,
      })
      if (this.round + 1 === this.players.length) {
        this.round = 0
        this.draw++
      } else {
        this.round++
      }
      let argsStateNextPlayer = ""
      if (this.draw > 4) {
        argsStateNextPlayer = { id: this.round, state: "Waiting" }
      } else {
        argsStateNextPlayer = { id: this.round, state: "Playing" }
        this.name = this.players[this.round].name
      }
      this.$store.commit("players/updatePlayerState", argsStateNextPlayer)
    },
    showRiver: function () {
      this.river = true
    },
  },
}
</script>
