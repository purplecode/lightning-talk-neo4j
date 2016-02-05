var gulp = require('gulp');
var jade = require('gulp-jade');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');


var paths = {
    src: './src/**/*.jade',
    dest: './dist/'
};

gulp.task('watch', function (cb) {
    watch(paths.src, function () {
        gulp.src(paths.src)
            .pipe(jade())
            .pipe(gulp.dest(paths.dest))
            .on('end', cb);
    });
});

gulp.task('server', function () {
    gulp.src('.')
        .pipe(webserver({
            fallback: 'dist/index.html',
            livereload: true,
            open: true
        }));
});