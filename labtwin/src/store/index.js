import Vuex from 'vuex';
import Vue from 'vue';
import fetchEvents from './module/fetchIndex';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        fetchEvents
    }
})