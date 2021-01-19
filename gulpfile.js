var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemap = require('gulp-sourcemaps');

// gulp.task('dashboard-sass', function () {
//     return gulp.src('./Content/themes/dashboard/**/app.scss')
//         .pipe(sourcemap.init())
//         .pipe(sass().on('error', sass.logError))
//         .pipe(sourcemap.write("map"))
//         .pipe(gulp.dest('./Content/themes/dashboard'));
// });

gulp.task('Sass', function () {
    return gulp.src('./theme/app.scss')
        .pipe(sourcemap.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemap.write("map"))
        .pipe(gulp.dest('./theme'));
});

gulp.task('watch-sass', function () {
    gulp.watch('./theme/**/*.scss', gulp.series('Sass'));
});