'use strict';

import 'es6-promise/auto';
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './app.vue';
import {store} from '@/store';

Vue.use(VueLazyload);

new Vue({
  el: '#app',
  components: {App},
  template: '<App></App>',
  store,
});
