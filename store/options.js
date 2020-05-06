export const state = () => ({
  noRest: false,
  allCard: false,
  doubleColor: false,
})

export const mutations = {
  setNoRest(state, bool) {
    state.noRest = bool
  },
  setAllCard(state, bool) {
    state.allCard = bool
  },
  setDoubleColor(state, bool) {
    state.doubleColor = bool
  },
  //clear the deck
  clearOptions(state) {
    state.noRest = false
    state.allCard = false
    state.doubleColor = false
  },
}

export const getters = {
  //get the options
  getNoRest(state) {
    return state.noRest
  },
  getAllCard(state) {
    return state.allCard
  },
  getDoubleColor(state) {
    return state.doubleColor
  },
}
