<template>
  <div class="card">
    <div class="card-content">
      <div>
        <br/>
        <img width="30%" :src="getImgUrl(card.png)" v-bind:alt="card.number">
      </div>
      <div class="content" v-if="playerName != ''">
        <br/>
        C'est au tour de <strong>{{playerName}}</strong>
      </div>
      <button @click="pick" class="button is-dark is-medium is-rounded">Draw a card</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Deck from "./../deck.json";
  export default {
    props: ['playerName'],
    data() {
      return {
        deck: Deck,
        card: "",
      }
    },
    methods: {
      pick: function() {
        var chosenNumber = Math.floor(Math.random() * this.deck.length);
        this.card = this.deck[chosenNumber]; // pick the card in the deck
        this.deck.splice(chosenNumber, 1); // remove the card in the deck
        this.$emit("pick",this.card);
      },
      getImgUrl(imageName) {
        if (imageName !== undefined) {
          return require("./../assets/" + imageName);
        }
      }
    }
  }
</script>
