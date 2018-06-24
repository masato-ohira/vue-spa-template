'use strict';

const google = require('googleapis');
const gl = require('./google-loader.js');

// token未生成の場合本jsを実行
gl.loadAuth({
  done: (auth) => {
    let sheets = google.sheets('v4');
    console.log('token created');
  },
});
