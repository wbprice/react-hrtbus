'use strict'

const gulp = require('gulp')
const babel = require('gulp-babel')
const gutil = require('gulp-util')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass');

function onError(error) {
  gutil.log(error.message)
  this.emit('end')
}

module.exports = {

  defaultTaskName: 'watch',

  tasks: {
    default: ['compileImages', 'compileTemplate'],
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
      return gulp.watch('./client/**/*.*', ['compileTemplate', 'compileImages', 'compileStyles'])
    }
  }

}
