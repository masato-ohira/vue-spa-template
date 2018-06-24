'use strict';

const gulp     = require('gulp');
const plumber  = require('gulp-plumber');
const svgmin   = require('gulp-svgmin');
const iconfont = require('gulp-iconfont');
const fontcss  = require('gulp-iconfont-css');
const sequence = require('run-sequence');

const {src, dest} = require('../config');
const fontName    = 'myicon';

const optsIconfont = {
  fontName: fontName,
  formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
  appendCodepoints: false,
  // fixedWidth: 512,
  fontHeight: 512,
  normalize: true,
  // centerHorizontally: true,
};

gulp.task('iconfont', (callback) => {
  return sequence(
    'iconfont-build',
    'iconfont-copy',
    callback
  );
});

gulp.task('iconfont-build', () => {
  return gulp.src(`${src.fonts}/${fontName}/svg/*.svg`)
    .pipe(svgmin())
    .pipe(plumber())
    .pipe(fontcss({
      fontName: fontName,
      path: `${src.fonts}/_tmpl.scss`,
      targetPath: `./_${fontName}.scss`,
      fontPath: `../fonts/${fontName}/`,
    }))
    .pipe(iconfont(optsIconfont))
    .pipe(gulp.dest(`${src.fonts}/${fontName}/`));
});

gulp.task('iconfont-copy', () => {
  return gulp.src([
    `${src.fonts}/${fontName}/*`,
    `!${src.fonts}/${fontName}/*.scss`,
    `!${src.fonts}/${fontName}/svg`,
  ])
  .pipe(gulp.dest(`${dest.fonts}/${fontName}`));
});
