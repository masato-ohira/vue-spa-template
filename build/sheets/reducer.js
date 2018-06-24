'use strict';

const sugar  = require('sugar');
sugar.extend();

module.exports = {
  table2json(entry) {
    // vars
    let obj = [];
    obj['keys'] = [];
    obj['data'] = [];

    entry.forEach(function(val) {
      let value = val;
      let m, r, c, t;
      m = value.id.$t.match(/\/R(\d+)C(\d+)$/);
      r = parseInt(m[1]) - 2;
      c = parseInt(m[2]) - 1;
      t = value.content.$t;
      if ( r < 0 ) {
        obj.keys.push(t);
      } else if ( c < obj.keys.length  ) {
        obj.data[r] = obj.data[r] || {};
        obj.data[r][obj.keys[c]] = t;
      }
    });

    // // 1行目を除く
    obj.data.shift();
    console.log(obj.data.length + 'data');

    return obj.data;
  },

  table2arr(res) {
    // 1行目をkeyとして定義
    let keys = res.values.shift();
    // 2行目を除去
    res.values.shift();
    let after = [];
    res.values.forEach(function(tr) {
      let obj = {};
      tr.forEach(function(td, n) {
        obj[keys[n]] = td;
      });
      after.push(obj);
    });

    return after;
  },

  table2obj(res) {
    // 1行目をkeyとして定義
    let keys = res.values.shift();
    // 2行目を除去
    res.values.shift();
    let after = {};
    res.values.forEach(function(tr) {
      let obj = {};
      tr.forEach(function(td, n) {
        obj[keys[n]] = td;
      });
      after[tr[0]] = obj;
    });

    return after;
  },

  table2vals(res) {
    // 不要な行を除去
    res.values.shift();
    res.values.shift();

    let after = {};
    res.values.forEach(function(tr) {
      let key = tr.shift();
      after[key] = tr;
    });

    return after;
  },

  pushObj(res) {
    // 1行目をkeyとして定義
    let keys = res.values.shift();
    // 2行目を除去
    res.values.shift();
    let after = {};

    res.values.forEach(function(tr) {
      let obj = {};
      tr.forEach(function(td, n) {
        obj[keys[n]] = td;
      });

      if (typeof after[tr[0]] === 'undefined') {
        after[tr[0]] = [];
      }
      after[tr[0]].push(obj);
    });

    return after;
  },
};
