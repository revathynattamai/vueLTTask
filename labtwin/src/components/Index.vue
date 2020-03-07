<template>
  <div v-if="isLoading" class="progress" style="width: 50%; margin: auto;">
    <div
      class="progress-bar progress-bar-striped active"
      role="progressbar"
      style="width: 70%"
    >
      <span class="sr-only">60% Complete</span>
    </div>
  </div>
  <div v-else>
    <router-link to="/Favorite" class="routerLink">Favorite</router-link>
    <h1>Events Page</h1>
    <table>
      <thead>
        <th style="width: 50%" v-on:click="sort" id="name">
          Name
          <span
            v-bind:class="[isNameAsec ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down']"
          ></span>
        </th>
        <th v-on:click="sort" id="date">
          Date
          <span
            v-bind:class="[isDateAsec ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down']"
          ></span>
        </th>
        <th id="price">Price</th>
      </thead>
      <tr v-for="events in allEvents" :key="events.id">
        <td style="padding-right: 20px">{{events.name}}</td>
        <td>{{events.dates.start.localDate}}</td>
        <template v-if="events.priceRanges">
          <td v-for="item in events.priceRanges" :key="item.message">{{item.min }}</td>
        </template>
        <template v-else>
          <td>0</td>
        </template>
      </tr>
    </table>
    <Pagination />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Pagination from "./Pagination";

export default {
  name: "Index",
  components: {
    Pagination
  },
  data() {
    return {
      isNameAsec: false,
      isDateAsec: false
    };
  },
  methods: {
    ...mapActions(["fetchEvents", "sortEvents"]),
    sort(e) {
      if (e.currentTarget.id === "name") {
        this.isNameAsec = !this.isNameAsec;
        let sortOrder = this.isNameAsec ? "asc" : "desc";
        this.sortEvents({ value: e.currentTarget.id, sortOrder });
      } else {
        this.isDateAsec = !this.isDateAsec;
        let sortOrder = this.isDateAsec ? "asc" : "desc";
        this.sortEvents({ value: e.currentTarget.id, sortOrder });
      }
    }
  },
  computed: {
    ...mapGetters(["allEvents", "isLoading"])
  },
  created() {
    this.fetchEvents();
  }
};
</script>i

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
