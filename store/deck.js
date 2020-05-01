export const state = () => ({
  deck: [],
})

export const mutations = {
  //splice a card in the deck
  SPLICE(state, key) {
    state.deck.splice(key, 1)
  },
  ADD(state, card) {
    state.deck.push(card)
  },
  //clear the deck
  CLEAR(state) {
    state.deck = []
  },
}

export const getters = {
  //get the deck
  get(state) {
    return state.deck
  },
}
