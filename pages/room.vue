<template>
  <div class="container ">
    <div class="columns is-multiline is-mobile">
      <div class="column is-one-third">
        <Player />
      </div>
      <div class="column is-one-third">
        <Player />
      </div>
      <div class="column is-one-third">
        <Player />
      </div>
      <div class="column is-one-quarter is-primary">
        <Player />
      </div>
      <div class="column is-half">
        <Table @pick="pickACard"/>
      </div>
      <div class="column is-one-quarter">
        <Player />
      </div>
      <div class="column is-one-quarter">
        <Player />
      </div>
      <div class="column is-one-quarter">
        <Player />
      </div>
      <div class="column">
        <Player />
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import Player from '~/components/Player.vue'
  import Table from '~/components/Table.vue'
  export default {
    components: {
      Player,
      Table
    },
    data() {
      return {
        card: "",
        round: 0,
        persons: [
          {
            id: 0,
            name: "Robert",
            status: "Joue",
            cards: []
          },
          {
            id: 1,
            name: "Kévin",
            status: "En attente",
            cards: []
          }
        ]
      };
    },
    methods: {
      pickACard: function() {
        console.log('pick a card');
        console.log(this.persons);
        this.pick();
        this.persons[this.round].cards.push(this.card);
        this.persons[this.round].status = "En attente";
        if (this.round + 1 === this.persons.length) {
          this.round = 0;
        } else {
          this.round++;
        }
        this.persons[this.round].status = "Joue";
        console.log(this.round);
      }
    }
  }
</script>
<style>
  .container {
    margin: 0 auto;
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>

