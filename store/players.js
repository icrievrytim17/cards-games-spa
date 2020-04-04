export const state = () => ({
  list: [],
})

export const mutations = {
  //add a player to the list players
  add(state, player) {
    state.list.push(player)
  },
  //clear the players
  clear(state) {
    state.list = []
  },
  //splice a player (during delete)
  splice(state, key) {
    state.list.splice(key, 1)
  },
  //add a cart to the hand of a player
  addcard(state, args) {
    state.list[args.id].cards.push(args.card)
  },
  //update the state of a player
  updatePlayerState(state, args) {
    state.list[args.id].state = args.state
  },
}

export const getters = {
  //get the list of players
  get(state) {
    return state.list
  },
}
