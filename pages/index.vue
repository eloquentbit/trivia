<template>
  <div>
    <div class="trivia">
      <p>{{ message }}</p>
    </div>
    <links/>
  </div>
</template>

<script>
  import axios from 'axios'
  import Links from '~components/Links.vue'

  export default {
    components: {
      Links
    },
    data ({ params }) {
      return axios.get('http://numbersapi.com/random?json')
        .then((res) => {
          return { message: res.data.text }
        })
    }
  }
</script>
