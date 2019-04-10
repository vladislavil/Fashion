import Vue from 'vue';
import AppVue from './App.vue';
import VueRouter from 'vue-router';

import './index.pug';
import './index.sass';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home},
  { path: '/gtntric', component: Gtntric },
  { path: '/elements', component: Elements }
];

const router = new VueRouter({
  routes
});

export default () => {

  const app = new Vue({
    router,
    render: createElem => createElem(AppVue),
  }).$mount("#main");

};
