var gulp = require('gulp');
var rename = require('gulp-rename');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

function sync(cb){
    browserSync.init({
        server: {
            baseDir: "./build/"
        },
        port: 3000
    })

    cb();
}

gulp.task('sync', sync);

function compileStyle(cb){

    gulp.src('./app/**/*.scss')
    .pipe(scss({
        outputStyle: 'compressed',
        errLogToConsole: true
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());

    cb();
}
gulp.task('compileStyle', compileStyle);

function watchFiles(cb){
    gulp.watch('./**/*.scss', compileStyle);
    gulp.watch('./index.html', browserReload);

    cb();
}

function browserReload(cb){
    browserSync.reload();
    cb();
}

gulp.task('default', gulp.parallel(sync, watchFiles))