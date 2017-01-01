<template>
  <div class="content">
    <div class="trivia">
      <p>{{ message }}</p>
    </div>
  </div>
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
