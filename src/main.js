/**
 * Core
 */
import Vue from 'vue';
import ShardsVue from 'shards-vue';

/**
 * Router & Store
 */
import router from './router';

/**
 * Dependencies
 */
import Axios from 'axios';
import appOpts from './config';

/**
 * Vue Components
 */
import App from './App.vue';
import VueToast from 'vue-toast-notification';

/**
 * Styles
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.css';
import './assets/styles/app-styles.css';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = process.env.NODE_ENV === 'development';

Vue.prototype.$eventHub = new Vue();
Vue.prototype.$http = Axios;
Vue.prototype.$http.defaults.baseURL = appOpts.apiEndpoint;

Vue.use(ShardsVue);
Vue.use(VueToast, {
  position: 'top-right',
  duration: 5000
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
