module.exports = {
  head: {
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
