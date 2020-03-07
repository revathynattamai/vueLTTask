<template>
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item" v-on:click="fetchPageEvents">
      <a class="page-link" href="#" v-bind:class="[selectedPage === '1' ? 'active' : '']">1</a>
    </li>
    <li class="page-item">
      <a
        class="page-link"
        href="#"
        v-on:click="fetchPageEvents"
        v-bind:class="[selectedPage === '2' ? 'active' : '']"
      >2</a>
    </li>
    <li class="page-item" v-on:click="fetchPageEvents">
      <a class="page-link" v-bind:class="[selectedPage === '3' ? 'active' : '']" href="#">3</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Pagination",
  data() {
    return {
      selectedPage: 1
    };
  },
  methods: {
    ...mapActions(["fetchPageEvent"]),
    fetchPageEvents(e) {
      this.selectedPage = e.target.text;
      this.fetchPageEvent(this.selectedPage);
    }
  },
  computed: {
    ...mapGetters(["allEvents"])
  }
};
</script>

<style>
a {
  margin: 5px;
}
</style>