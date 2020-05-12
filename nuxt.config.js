export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Play & Drink" || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "Play and drink",
        name: "Play and drink",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon-bottle-card.png" },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/scss/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~plugins/ga.js", mode: "client" }, "~/plugins/i18n.js"],

  router: {
    middleware: "i18n",
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    /*
     ** Documentation fontawesome module
     ** https://github.com/nuxt-community/fontawesome-module
     */
    [
      "@nuxtjs/fontawesome",
      {
        component: "fa",
        suffix: true,
      },
    ],
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    "@nuxtjs/bulma",
    "@nuxtjs/style-resources",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],

  sitemap: {
    path: "/sitemap.xml", // L'emplacement de votre fichier sitemap.
    hostname: process.env.WEBSITE_URL, // L'adresse de votre site, que vous pouvez placer comme ici dans une variable d'environnement.
    cacheTime: 1000 * 60 * 15, // La durée avant que le sitemap soit regénéré. Ici 15mn.
    gzip: true,
    generate: false, // Génère une version statique du sitemap quand activé. À utiliser avec nuxt generate.
    exclude: [
      // Les pages qu'on a pas trop envie de voir atterrir sur Google.
      "/privacy",
    ],
  },

  robots: {
    Disallow: ["/privacy"],
    Sitemap: `http://playndrink.online/sitemap.xml`,
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Exécuter ESLint lors de la sauvegarde
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
