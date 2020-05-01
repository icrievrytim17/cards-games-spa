
export const state = () => ({
  deck: [],
})

export const mutations = {
  //splice a card in the deck
  SPLICE(state, key) {
    state.deck.splice(key, 1)
  },
  add(state, card) {
    state.deck.push(card)
  },
  //clear the deck
  clear(state) {
    state.deck = []
  },
}

export const getters = {
  //get the deck
  get(state) {
    return state.deck
  },
}
