var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch');

gulp.task('less', function(){
    return gulp.src('bundles/styles.less')
        .pipe(less())
        .pipe(concat('styles.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('css'));
});

gulp.task('js', function() {
    gulp.src('bundles/**/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'))
});

gulp.task('watchless', function(){
    gulp.watch('bundles/**/*.less', ['less']);
})

gulp.task('watchjs', function(){
    gulp.watch('bundles/**/*.js', ['js']);
})

gulp.task('build', function (callback) {
    runSequence('less', 'js',
        callback
    )
})

gulp.task('watch', function (callback) {
    runSequence('less', 'js', 'watchless', 'watchjs',
        callback
    )
})