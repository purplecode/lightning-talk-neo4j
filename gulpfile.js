var gulp = require('gulp');
var jade = require('gulp-jade');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');


var paths = {
    src: {
        from: './src/**/*.jade',
        to: './dist/'
    },
    styles: './src/styles/**/*.css',
    images: {
        from: './src/images/**/*',
        to: './dist/images'
    }
};

gulp.task('watch', function () {

    watch([paths.src.from, paths.styles], function () {
        gulp.src(paths.src.from)
            .pipe(jade())
            .pipe(gulp.dest(paths.src.to));
    });

    watch([paths.images.from], function () {
        gulp.src(paths.images.from)
            .pipe(gulp.dest(paths.images.to));
    });
});

gulp.task('server', function () {
    gulp.src('./dist/')
        .pipe(webserver({
            fallback: 'dist/index.html',
            livereload: true,
            open: true
        }));
});