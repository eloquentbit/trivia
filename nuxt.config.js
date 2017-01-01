module.exports = {
  loading: false,
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet',
        src: 'https://fonts.googleapis.com/css?family=Noto+Serif' }
    ]
  },
  build: {
    vendor: ['axios']
  },
  css: ['~assets/css/main.css']
}
