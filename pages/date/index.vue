<template>
  <div>
    <message></message>
    <links/>
  </div>
</template>

<script>
import axios from "axios";
import Message from "~/components/Message";
import Links from "~/components/Links";

export default {
  components: {
    Message,
    Links
  },
  fetch({ store, params }) {
    return axios.get("http://numbersapi.com/random/date?json").then(res => {
      store.commit("setMessage", res.data.text);
    });
  }
};
</script>
