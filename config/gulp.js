'use strict'

const gulp = require('gulp')
const babel = require('gulp-babel')
const gutil = require('gulp-util')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass');
const webpack = require('gulp-webpack');


function onError(error) {
  gutil.log(error.message)
  this.emit('end')
}

module.exports = {

  defaultTaskName: 'default',

  tasks: {
    default: ['compileJS', 'compileImages', 'compileTemplate', 'compileStyles', 'watch'],
    compileJS() {
      return gulp.src('./client/js/layout.js')
        .pipe(webpack())
        .pipe(gulp.dest('./dist/client.js'));
    },
    compileTemplate() {
      return gulp.src('./client/js/components/**/*.js')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(babel({
          presets: ['react', 'es2015']
        }))
        .pipe(gulp.dest('dist'))
    },
    compileImages() {
      return gulp.src('./client/images/**/*')
        .pipe(gulp.dest('dist/images'))
    },
    compileStyles() {
      return gulp.src('./client/styles/**/*')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
    },
    watch() {
      return gulp.watch(['./client/**/*.*', './api/**/*.*'], ['compileTemplate', 'compileImages', 'compileStyles'])
    }
  }

}
