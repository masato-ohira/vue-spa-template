'use strict';

const SRC    = './_src';
const WEB_ROOT   = './dist';
const DEST   = './dist';
const ASSETS = DEST + '/assets';

module.exports = {
  vars: {
    appName: 'app-name',
    root: '/',
    host: 'https://example.com',
    // assets: '/assets', // ルート相対
    assets: './assets', // 相対
  },
  src: {
    'dir': SRC,
    'js': SRC,
    'sass': SRC,
    'pug': SRC,
    'json': SRC + '/json',
    'fonts': SRC + '/assets/fonts',
    'vue': SRC,
    'port': 8001,
  },
  dest: {
    'dir': DEST,
    'root': WEB_ROOT,
    'assets': ASSETS,
    'css': ASSETS + '/css',
    'js': ASSETS + '/js',
    'json': ASSETS + '/json',
    'ssi': ASSETS + '/ssi',
    'fonts': ASSETS + '/fonts',
    'img': ASSETS + '/img',
  },
  browsers: [
    'last 5 versions',
    'ie >= 11',
    'safari >= 8',
    'ios >= 8',
    'android >= 5',
  ],
  npm: './node_modules',
};
