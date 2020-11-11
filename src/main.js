import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './static/iconfont/iconfont.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import axios from 'axios' //axios组件
Vue.prototype.$axios=axios
axios.defaults.baseURL = 'http://lin007.cn:1996' //设置统一路径前缀

import Toast from './components/toast/toast.js' //消息组件
Vue.prototype.$toast=Toast
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
