import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import Index from '../src/components/Index';
import Favorite from '../src/components/Favorite';

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/', component:Index },
  {path: '/favorite', component:Favorite }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
