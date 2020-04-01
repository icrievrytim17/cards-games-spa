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
        <Table />
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
  import Player from '~/components/Player.vue'
  import Table from '~/components/Table.vue'
  export default {
    components: {
      Player,
      Table
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

