'use strict';
import types from './types';
import $ from 'jquery';

const actions = {
  [types.SET_POSTS]({commit, state}, api) {
    $.ajax({
      url: `${state.vars.assets}/json/posts.json`,
    })
    .done( (res) => {
      commit(types.SET_POSTS, res);
    });
  },
};

export default actions;
