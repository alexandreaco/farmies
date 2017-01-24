// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Home from './components/Home';
import Map from './components/Map';
import List from './components/List';
import Farms from './components/Farms';
import PageNotFound from './components/PageNotFound';

Vue.use(VueRouter);
Vue.use(VueResource);

// Routes
const routes = [
  { path: '/', component: Home },
  { path: '/farms/:id',
    component: Farms,
    children: [
      {
        path: 'map',
        component: Map,
      },
      {
        path: 'list',
        component: List,
      },
    ],
  },
  { path: '*', component: PageNotFound },
];

// Router
const router = new VueRouter({
  mode: 'history',
  routes,
});

// App
new Vue({
  router,
  template: '<App/>',
  components: { App },
}).$mount('#app');
