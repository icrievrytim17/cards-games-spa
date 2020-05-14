export const state = () => ({
  locales: [
    {
      code: "fr",
      name: "france",
    },
    {
      code: "en",
      name: "united-kingdom",
    },
  ],
  locale: "en", // currently active language. default value en
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.find((el) => el.code === locale)) {
      state.locale = locale
    }
  },
}

export const getters = {
  //get the deck
  get(state) {
    return state.locale
  },
}
