'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import createLogger from 'vuex/dist/logger';

import types from './types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

import {vars} from '../../build/config.js';

const store = new Vuex.Store({
  state: {
    vars: vars,
    posts: null,
  },
  getters,
  actions,
  mutations,
  plugins: [
    createLogger(),
  ],
});

window.$store = store;

export {store, types};
