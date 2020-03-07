import axios from 'axios';

const state = {
    events : []
};
const getters = {
    allEvents:(state) => state.events
};
const actions = {
async fetchIndex({commit}) {
const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events?countryCode=US&apikey=6gGSQkgPIGrD3eVkLMZGi0OA993P5KXy');
commit('setEvents', response.data._embedded.events);
}
          
};
const mutations = {
    setEvents: (state, events) => (state.events = events)
};

export default {
    state,
    getters,
    actions,
    mutations
}