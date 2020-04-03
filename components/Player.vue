<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{person.name}}
      </p>
    </header>
    <div class="card-content">

      <div class="media">
        <div class="media-content" v-for="personCard in person.cards" :key="personCard.id">
          <img width="60%" :src="getImgUrl(personCard.png)" :alt="personCard.number">
        </div>
      </div>
      <div class="content">
        {{person.status}}
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Player',
  props: ['person'],
  methods: {
    getImgUrl(imageName) {
      console.log("show card for the player");
      console.log(imageName);
      if (imageName !== undefined) {
        return require("./../assets/" + imageName);
      }
    }
  }
}
</script>
