<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ player.name }}
      </p>
    </header>
    <div class="card-content">
      <div class="media">
        <div
          v-for="playerCard in player.cards"
          :key="playerCard.id"
          class="media-content"
        >
          <img
            width="60%"
            :src="getImgUrl(playerCard.png)"
            :alt="playerCard.number"
          />
        </div>
      </div>
      <div class="content">
        {{ player.state }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    player: {
      type: Object,
      default: function () {
        return []
      },
    },
  },
  methods: {
    getImgUrl(imageName) {
      if (imageName !== undefined) {
        return "/cards/" + imageName
      }
    },
  },
}
</script>
