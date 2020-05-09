<template>
  <div
    :class="{
      'player-drink': player.state === 'Drink',
      'player-give': player.state === 'Give',
    }"
    class="card"
  >
    <header class="card-header">
      <p class="card-header-title is-centered">
        {{ player.name }}
      </p>
    </header>
    <div class="card-content has-text-centered">
      <div v-if="player.cards.length > 0" class="media">
        <div
          v-for="(playerCard, index) in player.cards"
          :key="playerCard.id"
          class="media-content"
        >
          <img
            width="85px"
            height="135px"
            :src="getImgUrl(playerCard.png)"
            :alt="playerCard.number"
            :class="'player-card' + index"
          />
        </div>
      </div>
      <div v-if="player.cards.length === 0" class="media">
        <div class="media-content">
          <img width="85px" height="135px" src="/cards-back/red_back.png" />
        </div>
      </div>
      <div
        :class="{ 'has-text-weight-bold': player.state != 'Waiting' }"
        class="content is-medium"
      >
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
  computed: {
    widthCard: function () {
      if (this.player.cards.length > 2) {
        return "100%"
      } else if (this.player.cards.length > 1) {
        return "80%"
      } else {
        return "60%"
      }
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
