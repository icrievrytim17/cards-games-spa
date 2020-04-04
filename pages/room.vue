<template>
  <div class="container ">
    <div class="columns is-multiline is-mobile">
      <div class="column is-half">
        <Table @pick="pickACard" :player-name="this.name" :river="this.river"/>
      </div>
      <div class="column is-one-quarter" v-for="player in players" :key="player.id">
        <Player :player="player"/>
      </div>
    </div>

  </div>
</template>

<script>
  import Player from '~/components/Player.vue'
  import Table from '~/components/Table.vue'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      Player,
      Table
    },
    data() {
      return {
        card: "",
        round: 0,
        draw: 0,
        river: false,
        name: ""
      };
    },
    created: function () {
      this.name = this.players[this.round].name;
    },
    computed: {
      //GET pour récupérer dans le store la liste players
      ...mapGetters({
                   players: 'players/get',
                 })
    },
    methods: {
      pickACard: function(cardPicked) {
        if (this.draw < 5) {
          let argsAddCard = { 'id' : this.round, 'card' : cardPicked};
          this.$store.commit('players/addcard', argsAddCard);
          let argsStatePlayer = { 'id' : this.round, 'state' : 'Waiting'};
          this.$store.commit('players/updatePlayerState', argsStatePlayer);
          if (this.round + 1 === this.players.length) {
            this.round = 0;
            this.draw++;
          } else {
            this.round++;
          }
          let argsStateNextPlayer = "";
          if (this.draw === 4) {
            this.river = true;
            argsStateNextPlayer = { 'id' : this.round, 'state' : 'Waiting'};
          } else {
            argsStateNextPlayer = { 'id' : this.round, 'state' : 'Playing'};
            this.name = this.players[this.round].name;
          }
            this.$store.commit('players/updatePlayerState', argsStateNextPlayer);
        }
      }
    }
  }
</script>

