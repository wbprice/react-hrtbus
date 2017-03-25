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
    default: ['compileImages', 'compileJavaScript'],
    compileJavaScript() {
      return gulp.src('./client/js/**/*.js')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(babel({
          presets: ['react', 'es2015']
        }))
        .pipe(gulp.dest('dist'))
        .on("finish", function(){
          console.log("Finished Compiling JavaScript!")
        })
    },
    compileImages() {
      return gulp.src('./client/images/**/*')
                 .pipe(plumber({ errorHandler: onError }))
                 .pipe(gulp.dest('dist/images'))
                 .on("finish", function(){
                   console.log("Finished Compiling Images!")
                 })
    },
    compileStyles() {
      return gulp.src('./client/styles/**/*.scss')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .on("finish", function(){
          console.log("Finished Compiling Styles!")
        })
    },
    watch() {

      return gulp.watch(['./client/**/*.*','./api/**/*.*'], ['compileJavaScript', 'compileImages', 'compileStyles'])
    }
  }

}
