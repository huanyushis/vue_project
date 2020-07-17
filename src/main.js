// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/swiper-bundle.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
fastclick.attach(document.body)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
