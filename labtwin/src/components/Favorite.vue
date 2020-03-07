<template>
  <div>
    <h1>Favorite page</h1>
    <router-link to="/" class="routerLink">Index</router-link>
    <table>
      <thead>
        <th style ="width: 50%" v-on:click="sort" id="name">
          Name
          <span v-bind:class="[isNameAsec ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down']"></span>
        </th>
        <th v-on:click="sort" id="date">
          Date
          <span v-bind:class="[isDateAsec ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down']"></span>
        </th>
        <th id="price">
          Price
        </th>
      </thead>
      <tr v-for="events in allEvents" :key="events.id">
        <td style ="padding-right: 20px">{{events.name}}</td>
        <td>{{events.dates.start.localDate}}</td>
        <template v-if="events.priceRanges">
          <td v-for="item in events.priceRanges" :key="item.message">{{item.min }}</td>
        </template>
        <template v-else>
          <td>0</td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Favorite",
  data() {
    return {
      isNameAsec: false,
      isDateAsec: false,
      selectedPage: 1
    };
  },
  methods: {
    ...mapActions(["fetchEvents", "sortEvents"]),
    sort(e) { 
      if(e.currentTarget.id === "name") {
        this.isNameAsec = !this.isNameAsec;
        let sortOrder = this.isNameAsec ? 'asc' : 'desc';
        this.sortEvents({value:e.currentTarget.id,sortOrder})
      } else {
        this.isDateAsec = !this.isDateAsec;
        let sortOrder = this.isDateAsec ? 'asc' : 'desc';
        this.sortEvents({value:e.currentTarget.id,sortOrder})
      }
    }
  },
  computed: {
    ...mapGetters(["allEvents"])
    },
  created() {
    this.fetchEvents();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border-collapse: collapse;
  width: 90%;
  margin: auto;
}
th {
  cursor: pointer;
}
span {
  font-size: 14px;
}
th,
td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
.routerLink {
  margin: 20px;
  background: black;
  color: white;
  padding: 10px;
  border-radius: 2px;
  font-size: 20px;
}
</style>
