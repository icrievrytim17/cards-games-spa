<template>
  <div class="container ">
    <div class="columns is-multiline is-mobile">
      <div class="column is-half">
        <Table @pick="pickACard" :player-name="this.name"/>
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
        let argsAddCard = { 'id' : this.round, 'card' : cardPicked};
        this.$store.commit('players/addcard', argsAddCard);
        let argsStatePlayer = { 'id' : this.round, 'state' : 'Waiting'};
        this.$store.commit('players/updatePlayerState', argsStatePlayer);
        if (this.round + 1 === this.players.length) {
          this.round = 0;
        } else {
          this.round++;
        }
        let argsStateNextPlayer = { 'id' : this.round, 'state' : 'Playing'};
        this.$store.commit('players/updatePlayerState', argsStateNextPlayer);
        this.name = this.players[this.round].name;
      }
    }
  }
</script>
