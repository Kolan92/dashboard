const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');

gulp.task('styles', async () => {
    gulp.src('./sass/styles.scss')
        .pipe(plumber)
        .pipe(sourcemaps.init())
        .pipe(sass.sync())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css'))
});


gulp.task('watch', () => {
    gulp.watch('./sass/**/*.scss', gulp.series('styles'))
});