<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="box has-text-centered">
          <label class="label">Add players</label>
          <div class="field is-grouped">
            <div class="control is-expanded">
              <input class="input" type="text" maxlength="20" placeholder="New player" v-model="newplayer">
            </div>
            <div class="control">
              <button :disabled="newplayer.length === 0" :required="newplayer.length > 0" @click="addPlayer(newplayer)" class="button is-black">
                Add
              </button>
            </div>
          </div>
          <label v-if="players.length > 0" class="label">List of players</label>
          <div class="field card" v-for="player in players" :key="player.id">
            <header class="card-header has-text-centered">
              <p class="card-header-title">
                {{ player.name }}
              </p>
              <p class="card-header-icon">
                <button v-if="players.length -1 === player.id"  class="button is-danger is-small " aria-label="Delete player" @click="deleteLastPlayer(player.id)">
                  Delete
                </button>
              </p>
            </header>
          </div>
          <div class="field">
            <a class="button is-black" aria-label="Play - Jouer" @click="play()">
              Play
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        players: [],
        newplayer: "",
        playerCount: 0
      }
    },
    methods: {
      addPlayer: function(player) {
        //Default state
        let state = "Waiting";
        if (this.playerCount  === 0) {
          //State if first player
          state = "Playing";
        }
        //Add players for the game
        this.players.push({
          id: this.playerCount,
          name: player,
          state: state,
          cards: []
        });
        //Increment player count for next player id
        this.playerCount++;
        //Empty the input text
        this.newplayer = "";
        console.table(this.players);
      },
      deleteLastPlayer: function(key) {
        //delete player from table
        this.players.splice(key, 1);
        //Decrement the number of player
        this.playerCount--;
      },
      play: function(){

      }
    }
  }
</script>
