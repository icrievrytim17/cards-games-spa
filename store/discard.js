export const state = () => ({
  list: [],
})

export const mutations = {
  //splice a card in the deck
  SPLICE(state, key) {
    state.list.splice(key, 1)
  },
  ADD(state, card) {
    state.list.push(card)
  },
  //clear the list
  CLEAR(state) {
    state.list = []
  },
}

export const getters = {
  //get the deck
  get(state) {
    return state.list
  },
}
