export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
      },

      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#aaa", height: "5px", duration: 5000 },
  /*
   ** Global CSS
   */
  css: ["~assets/style/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/components.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /* 
Scripts 
*/
  script: [
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
    },
    { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
    {
      src:
        "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
    }
  ],

  /*
  
  ** Build configuration
  */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  transition: {
    name: "fade",
    mode: "out-in"
  }
};
