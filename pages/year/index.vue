<template>
  <div>
    <message :message="message"></message>
    <links/>
  </div>
</template>

<script>
  import axios from 'axios'
  import Message from '~components/Message.vue'
  import Links from '~components/Links.vue'

  export default {
    components: {
      Message,
      Links,
    },
    data ({ params }) {
      return axios.get('http://numbersapi.com/random/year?json')
        .then((res) => {
          return { message: res.data.text }
        })
    }
  }
</script>
