/**
 * Gulpfile.
 * Project Configuration for gulp tasks.
 */

const folders = {
    app: ['./app/', './dist/'],
    controllers: ['./app/controllers/', './dist/assets/scripts/'],
    assets: ['./app/assets/', './dist/assets/'],
    css: ['./app/assets/css/', './dist/assets/css/'],
    sass: ['./app/scss/', './dist/assets/css/'],
    pug: ['./app/pug/', './dist/'],
    scripts: ['./app/assets/scripts/', './dist/assets/scripts/'],
    img: ['./app/assets/img/', './dist/assets/img/'],
    fonts: ['./app/assets/fonts/', './dist/assets/fonts/'],
    files: ['./app/assets/files/', './dist/assets/files/'],
    vendors: ['./app/assets/vendors/', './dist/assets/scripts/'],
};

// Browsers you care about for autoprefixing. https://github.com/ai/browserslist
const AUTOPREFIXER_BROWSERS = [
    'last 2 version',
    '> 1%',
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4',
    'bb >= 10',
];

// Requirements
var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    pug = require('gulp-pug'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglifyjs'),
    htmlminify = require('gulp-htmlmin'),
    cleaner = require('gulp-clean');

/**
 * Development Tasks.
 */
gulp.task('sass', function () {
    return (
        gulp
            .src(folders.sass[0] + '**/!(_)*.scss')
            .pipe(sass())
            .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
            .pipe(csscomb())
            .pipe(
                rename({
                    suffix: '.min',
                    prefix: 'vlt-',
                })
            )
            // minify
            .pipe(cleanCSS())
            .pipe(gulp.dest(folders.sass[1]))
    );
});

gulp.task('css-plugins', function () {
    return gulp
        .src(folders.css[0] + 'plugins/*.css')
        .pipe(concatCss('vlt-plugins.css'))
        .pipe(gulp.dest(folders.css[1]))
        .pipe(cleanCSS())
        .pipe(
            rename({
                suffix: '.min',
                prefix: '',
            })
        )
        .pipe(gulp.dest(folders.css[1]));
});

gulp.task('scripts', function () {
    return (
        gulp
            .src(folders.controllers[0] + '**/_*.js')
            .pipe(concat('vlt-controllers.min.js'))
            // minify
            .pipe(uglify())
            .pipe(gulp.dest(folders.controllers[1]))
    );
});

gulp.task('vendors', function () {
    return gulp
        .src([
            folders.vendors[0] + 'animsition.min.js',
            folders.vendors[0] + 'gsap.min.js',
            folders.vendors[0] + 'superclick.min.js',
            folders.vendors[0] + 'jquery.pagepiling.min.js',
            folders.vendors[0] + 'jquery-numerator.js',
            folders.vendors[0] + 'jquery.validate.min.js',
            folders.vendors[0] + 'swiper.min.js',
            folders.vendors[0] + 'jquery.fitvids.js',
            folders.vendors[0] + 'jquery.fancybox.min.js',
            folders.vendors[0] + 'fastclick.js',
            folders.vendors[0] + 'css-vars-ponyfill.min.js',
        ])
        .pipe(concat('vlt-plugins.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(folders.vendors[1]));
});

gulp.task('pug', function () {
    return gulp
        .src(folders.pug[0] + '**/!(_)*.pug')
        .pipe(
            pug({
                pretty: true,
            })
        )
        .pipe(gulp.dest(folders.pug[1]));
});

gulp.task('watch', function () {
    gulp.watch(folders.pug[0] + '**/*.pug', gulp.parallel('pug'));
    gulp.watch(folders.css[0] + '**/*.scss', gulp.parallel('sass'));
    gulp.watch(folders.controllers[0] + '**/*.js', gulp.parallel('scripts'));
    gulp.watch(folders.vendors[0] + '**/*.js', gulp.parallel('vendors'));
});

/**
 * Build.
 */
gulp.task('build-clean', function () {
    return gulp
        .src(folders.app[1] + '*', {
            read: false,
        })
        .pipe(cleaner());
});

gulp.task('build-html-minify', () => {
    return gulp
        .src(folders.app[1] + '**/*.html')
        .pipe(htmlminify({ collapseWhitespace: true }))
        .pipe(gulp.dest(folders.app[1]));
});

gulp.task('build-copy', function () {
    return gulp
        .src(folders.assets[0] + '**')
        .pipe(gulp.dest(folders.assets[1]));
});

// Tasks
gulp.task(
    'default',
    gulp.parallel(
        'build-copy',
        'watch',
        'pug',
        'sass',
        'css-plugins',
        'scripts',
        'vendors'
    )
);

gulp.task(
    'build',
    gulp.series(
        'build-clean',
        'build-copy',
        gulp.parallel('pug', 'sass', 'css-plugins', 'scripts', 'vendors'),
        'build-html-minify'
    )
);
