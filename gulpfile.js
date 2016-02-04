var gulp = require('gulp');
var jade = require('gulp-jade');
var webserver = require('gulp-webserver');


var paths = {
    src: './src/*.jade',
    dest: './dist/'
};

gulp.task('watch', function () {
    gulp.src(paths.src)
        .pipe(watch(paths.src))
        .pipe(jade())
        .pipe(gulp.dest(paths.dest));
});

gulp.task('server', function () {
    gulp.src('.')
        .pipe(webserver({
            fallback: 'dist/index.html',
            livereload: true,
            open: true
        }));
});