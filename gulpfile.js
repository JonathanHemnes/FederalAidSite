var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');

gulp.task('build', ['build:js'], ()=> {

});

gulp.task('build:js', ['clean:js'], ()=> {
    return gulp.src('./lib/scripts/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./server/web/dist/scripts'));
});

gulp.task('clean:js', ()=> {
    return del('./server/web/dist/main.js');
});

gulp.task('watch', ()=> {
    gulp.watch('./lib/scripts/**/*.js', ['build:js']);
});
