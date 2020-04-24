import Deck from "../static/deck.json"

export const state = () => ({
  deck: Deck,
})

export const mutations = {
  //splice a card in the deck
  SPLICE(state, key) {
    state.deck.splice(key, 1)
  },
  SET(state, deck) {
    state.deck = deck
  },
}

export const getters = {
  //get the deck
  get(state) {
    return state.deck
  },
}
