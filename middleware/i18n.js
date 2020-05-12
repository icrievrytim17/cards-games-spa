export default function ({ isHMR, route, req }) {
  if (isHMR) {
    // ignore if called from hot module replacement
    return
  }

  if (req) {
    if (route.name) {
      let locale = null

      // check if the locale cookie is set
      if (req.headers.cookie) {
        const cookies = req.headers.cookie
          .split("; ")
          .map((stringCookie) => stringCookie.split("="))
        const cookie = cookies.find((cookie) => cookie[0] === "locale")

        if (cookie) {
          locale = cookie[1]
        }
      }

      // if the locale cookie is not set, fallback to accept-language header
      if (!locale) {
        locale = req.headers["accept-language"]
          .split(",")[0]
          .toLocaleLowerCase()
          .substring(0, 2)
      }

      this.$i18n.locale = locale
      this.$store.commit("language/SET_LANG", locale)
    }
  }
}
