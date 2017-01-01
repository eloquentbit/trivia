<template>
  <p>{{ message }}</p>
</template>

<script>
  import axios from 'axios'

  export default {
    data ({ params }) {
      return axios.get('http://numbersapi.com/random?json')
        .then((res) => {
          return { message: res.data.text }
        })
    }
  }
</script>
