<template>
  <div class="card">
    <div class="card-content">
      <div>
        <br/>
        <img width="30%" :src="getImgUrl(card.png)" v-bind:alt="card.number">
      </div>
      <br/>
      <div class="content" v-if="playerName != '' && !river">
        C'est au tour de <strong>{{playerName}}</strong>
      </div>
      <div class="content" v-if="river">
        <strong>River</strong>
        <br />
        <p v-if="!this.give">Prend {{this.sip}} <span v-if="this.sip === 1">gorgée</span><span v-if="this.sip !== 1">gorgées</span></p>
        <p v-if="this.give">Donne {{this.sip}} <span v-if="this.sip === 1">gorgée</span><span v-if="this.sip !== 1">gorgées</span></p>
      </div>
      <button @click="distribute" v-if="!river" class="button is-dark is-medium is-rounded">Draw a card</button>
      <button @click="pickRiver" v-if="river" class="button is-dark is-medium is-rounded">Draw a card</button>
    </div>
  </div>
</template>

<script>
  import Deck from './../deck.json';
  export default {
    props: ['playerName', 'river'],
    data() {
      return {
        deck: Deck,
        card: "",
        sip: 1,
        round: 1,
        give: false
      }
    },
    methods: {
      distribute: function () {
        this.pick();
        this.$emit('pick',this.card);
      },
      pick: function() {
        var chosenNumber = Math.floor(Math.random() * this.deck.length);
        this.card = this.deck[chosenNumber]; // pick the card in the deck
        this.deck.splice(chosenNumber, 1); // remove the card in the deck
      },
      pickRiver: function() {
        console.log("pick for the rive");
        this.pick();
        this.round++;
        this.give = !this.give;
        if (this.round%2) {
          this.sip++;
        }
      },
      getImgUrl(imageName) {
        if (imageName !== undefined) {
          return '/cards/' + imageName;
        }
      }
    }
  }
</script>
