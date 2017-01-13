'use strict'

const gulp = require('gulp')
const babel = require('gulp-babel')

module.exports = {

  defaultTaskName: 'default',

  tasks: {
    default: ['compileImages', 'compileTemplate'],
    compileTemplate: () => {
      return gulp.src('./client/js/components/**/*.js')
        .pipe(babel({
          presets: ['react', 'es2015']
        }))
        .pipe(gulp.dest('dist'))
    },
    compileImages: () => {
      return gulp.src('./client/images/**.*')
        .pipe(gulp.dest('dist/images'));
    }
  }

}
