<template>
  <div class="card">
    <div class="card-content">
      <div>
        <br/>
        <img :src="getImgUrl(card.png)" v-bind:alt="card.number">
      </div>
      <div class="content">
        <br/>
        <strong>Pierre</strong> is Waiting
      </div>

      <button @click="pick" class="button is-dark is-medium is-rounded">Draw a card</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Deck from "./../deck.json";
  export default {
    data() {
      return {
        deck: Deck,
        card: "",
      }
    },
    methods: {
      pick: function() {
        console.log("pick a card for the table and show it");
        var chosenNumber = Math.floor(Math.random() * this.deck.length);
        this.card = this.deck[chosenNumber]; // pick the card in the deck
        this.deck.splice(chosenNumber, 1); // remove the card in the deck
        console.log(this.card);
        //return this.card;
      },
      getImgUrl(imageName) {
        console.log(imageName);
        if (imageName !== undefined) {
          return require("./../assets/" + imageName);
        }
      }
    },
  }
</script>
