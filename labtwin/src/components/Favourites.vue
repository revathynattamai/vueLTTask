<template>
<div>Hello World</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Favourite',
  props: {
    msg: String
  },
  created() {
axios.get('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=6gGSQkgPIGrD3eVkLMZGi0OA993P5KXy')
.then(res => console.log(res))
.catch(err => console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
