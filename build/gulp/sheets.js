'use strict';

const gulp    = require('gulp');
const fs      = require('fs');
const gl      = require('../sheets/google-loader');
const reducer = require('../sheets/reducer');
const {src}   = require('../config');

const saveJson = (src, dest) => {
  fs.writeFile(dest, JSON.stringify(src), 'utf-8', () => {
    console.log('Save ' + dest);
  });
};

// 下記taskはtoken生成後でないと実行できない
gulp.task('sheets', () => {
  const sheets = {};
  const plain = {};

  gl.loadSheets({
    spread: 'YOUR_SHEETS_ID',
    done: function(res, sid, len) {
      // 加工前のjsonを保存しておく
      plain[sid] = res;
      console.log('✔ ' + sid + ' loaded');

      switch (sid) {
        case 'simulator':
          sheets[sid] = reducer.table2obj(res);
          break;

        default:
          sheets[sid] = reducer.table2arr(res);
          break;
      }

      // 全てのsheet取得後に保存
      if ( Object.keys(sheets).length == len ) {
        saveJson(sheets, `${src.json}/sheets.json`);
        saveJson(plain, `${src.json}/sheets_plain.json`);
      }
    },
  });
});

