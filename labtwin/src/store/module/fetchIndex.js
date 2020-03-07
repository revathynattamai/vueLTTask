import axios from "axios";

const state = {
  events: [],
  totalPages: "",
  isLoading: false
};

const getters = {
allEvents: state => state.events,
isLoading: state => state.isLoading
};

const actions = {
  async fetchEvents({ commit }) {
    commit("setLoader", true);
    const response = await axios.get(
      "https://app.ticketmaster.com/discovery/v2/events?apikey=6gGSQkgPIGrD3eVkLMZGi0OA993P5KXy"
    );
    commit("setEvents", response.data._embedded.events);
    commit("setTotalPages", response.data.page.totalPages);
    commit("setLoader", false);
  },

  async sortEvents({ commit }, parameters) {
    commit("setLoader", true);
    const response = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events?sort=${parameters.value},${parameters.sortOrder}&apikey=6gGSQkgPIGrD3eVkLMZGi0OA993P5KXy`
    );
    commit("setEvents", response.data._embedded.events);
    commit("setLoader", false);
  },

  async fetchPageEvent({ commit }, page) {
    commit("setLoader", true);
    const response = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events?page=${page}&apikey=6gGSQkgPIGrD3eVkLMZGi0OA993P5KXy`
    );
    commit("setEvents", response.data._embedded.events);
    commit("setLoader", false);
  },
};

const mutations = {
  setEvents: (state, events) => (state.events = events),
  setTotalPages: (state, totalPages) => (state.totalPages = totalPages),
  setLoader: (state, isLoading) => (state.isLoading = isLoading)
};

export default {
  state,
  getters,
  actions,
  mutations
};
