const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoPrefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug');


// Opciones de configuración para las tareas

let sassOptions = {
    outputStyle: 'compressed'
};

let pugOptions = {
    pretty: true
};

let autoprefixerOptions = {
    browsers: 'last 2 versions'
};


// Tareas

// Pug
gulp.task('pug', () => {
    gulp.src('./dev/pug/*.pug')
        .pipe(pug(pugOptions))
        .pipe(gulp.dest('./public'));
});

// SASS
gulp.task('sass', () => {
    gulp.src('./dev/scss/main-styles.scss')
        .pipe(sass(sassOptions))
        .pipe(autoPrefixer(autoprefixerOptions))
        .pipe(gulp.dest('./public/css'));
});

// Watch (tarea por defecto)
gulp.task('default', () => {
    gulp.watch('./dev/pug/**/**.pug', ['pug']);
});
