<template>
  <div class="container ">
    <div class="columns is-multiline is-mobile">
      <div class="column is-half">
        <Table @pick="pickACard" :player-name="this.name"/>
      </div>
      <div class="column is-one-quarter" v-for="person in persons" :key="person.id">
        <Player :person="person"/>
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
        ],
        name: "",
      };
    },
    created: function () {
      this.name = this.persons[this.round].name;
    },
    methods: {
      pickACard: function(cardPicked) {
        this.persons[this.round].cards.push(cardPicked);
        this.persons[this.round].status = "En attente";
        if (this.round + 1 === this.persons.length) {
          this.round = 0;
        } else {
          this.round++;
        }
        this.persons[this.round].status = "Joue";
        this.name = this.persons[this.round].name;
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
