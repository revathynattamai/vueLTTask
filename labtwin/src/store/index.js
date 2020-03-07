import Vuex from 'vuex';
import Vue from 'vue';
import fetchIndex from './module/fetchIndex';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        fetchIndex
    }
})