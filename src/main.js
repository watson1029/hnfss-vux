// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAMap from 'vue-amap';
import App from './App'
import Home from './components/index.vue'
import Chart from './components/chart.vue'
import Fly from './components/flylist.vue'
import Current from './components/currentlist.vue'
import Detail from './components/datadetail.vue'
import List from './components/datalist.vue'
import FeedBack from './components/feedback.vue'

Vue.use(VueRouter);
Vue.prototype.$ajax = axios;
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '21629f77ae3e6e8e9dd0c7da7db4af1c',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Chart',
    component: Chart
  },
  {
    path: '/Fly',
    component: Fly
  },
  {
    path: '/Current',
    component: Current
  },
  {
    path: '/Detail',
    component: Detail
  },
  {
    path: '/List',
    component: List
  },
  {
    path: '/FeedBack',
    component: FeedBack
  }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
