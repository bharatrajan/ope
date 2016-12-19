'use strict';
var gulp = require('gulp');
var connect = require('gulp-connect');

//----------------------------------- Auxilary Services --------------------------------------
//LOCAL SERVER
gulp.task('connect',  function() {
  connect.server({
    port : 9180,
    root: './'
  });
});