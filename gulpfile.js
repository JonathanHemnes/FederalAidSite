'use strict';
const Gulp = require('gulp');
const Del = require('del');
const Concat = require('gulp-concat');

Gulp.task('build', ['build:js'], () => {

});

Gulp.task('build:js', ['clean:js'], () => {

    return Gulp.src('./lib/scripts/**/*.js')
        .pipe(Concat('main.js'))
        .pipe(Gulp.dest('./server/web/dist/scripts'));
});

Gulp.task('clean:js', () => {

    return Del('./server/web/dist/main.js');
});

Gulp.task('watch', () => {

    Gulp.watch('./lib/scripts/**/*.js', ['build']);
});
