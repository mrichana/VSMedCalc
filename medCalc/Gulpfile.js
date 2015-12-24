/// <binding ProjectOpened='serve' />
require('es6-promise').polyfill();
var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');
var bower = require('gulp-bower');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var imageMin = require('gulp-imagemin');
var gulpIf = require('gulp-if');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');
var sourcemap = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var tsc = require('gulp-typescript');
var manifest = require('gulp-manifest');

gulp.task('clean', function () {
    del('www/**');
});

gulp.task('bower', function () {
    return bower('bower_components');
});

gulp.task('copyLibs', ['bower'], function () {
    return gulp.src([
        'app/lib/winstore-jscompat.js',
        'bower_components/underscore/underscore-min.js',
        'bower_components/mathjs/dist/math.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/angular-aria/angular-aria.min.js',
        'bower_components/angular-messages/angular-messages.min.js',
        'bower_components/angular-i18n/angular-locale_el.js',
        'bower_components/moment/min/moment.min.js',
        'bower_components/angular-material/angular-material.min.js',
        'bower_components/angular-scroll/angular-scroll.min.js',
        'bower_components/katex/dist/katex.min.js',
        'bower_components/angular-katex/angular-katex.min.js'
    ])
    .pipe(sourcemap.init())
    .pipe(gulpIf('!*.min.js', uglify()))
    .pipe(concat('index.min.js'))
    .pipe(sourcemap.write())
    .pipe(gulp.dest('www/lib'))
});

gulp.task('copyHtml', function () {
    return gulp.src('app/**/*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('www'));
});

gulp.task('copyRoot', function () {
    return gulp.src([
        'app/*.{png,svg}',
        'app/browserconfig.xml'
    ])
    .pipe(gulp.dest('www'));
});

gulp.task('copyCss', function () {
    return gulp.src([
        'bower_components/angular-material/angular-material.css',
        'bower_components/katex/dist/katex.min.css',
        'app/css/*.css'
    ])
    .pipe(autoprefixer('last 2 versions'))
    .pipe(concat('index.css'))
    .pipe(minifyCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('www/css/'));
});

gulp.task('copyFonts', function () {
    return gulp.src([
        'app/fonts/*',
        'bower_components/katex/dist/fonts/*'])
    .pipe(gulp.dest('www/css/fonts'));
});

gulp.task('copyImages', function () {
    return gulp.src('app/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('www/images'));
});

gulp.task('copyTypescript', function () {
    return gulp.src([
        "scripts/typings/**/*.ts",
        "scripts/views/views.ts",
        "scripts/views/internalMedicine/*.ts",
        "scripts/views/pulmonology/*.ts",
        "scripts/views/triplex/*.ts",
        "scripts/views/cardiology/*.ts",
        "scripts/views/ecg/*.ts",
        "scripts/services.ts",
        "scripts/controllers.ts",
        "scripts/filters.ts",
        "scripts/directives.ts",
        "scripts/app.ts"
    ], { base: 'scripts/' })
    .pipe(sourcemap.init())
    .pipe(tsc({
        noImplicitAny: false,
        outDir: 'www/scripts',
        target: 'ES5'
    }))
    .pipe(concat("index.min.js"))
    .pipe(uglify())
    .pipe(sourcemap.write())
    .pipe(gulp.dest('www/scripts'));
});

gulp.task('serve', ['watch'], function () {
    browserSync.init({
        server: {
            baseDir: "www",
            port: 3000
        }
    });
    gulp.watch("www/**/*.*", browserSync.reload);
});

gulp.task('watch', ['copyRoot', 'copyLibs', 'copyCss', 'copyFonts', 'copyImages', 'copyHtml', 'copyTypescript'], function () {
    gulp.watch("fonts/**/*.svg", ['copyFonts']);
    gulp.watch("scripts/**/*.ts", ['copyTypescript']);
    gulp.watch("app/**/*.css", ['copyCss']);
    gulp.watch("app/**/*.html", ['copyHtml']);
});

gulp.task('build', ['copyRoot', 'copyLibs', 'copyCss', 'copyFonts', 'copyImages', 'copyHtml', 'copyTypescript'], function () {
    return gulp.src(['www/**/*'])
        .pipe(manifest({
          hash: true,
          preferOnline: false,
          filename: 'manifest.appcache',
          exclude: 'manifest.appcache'
        }))
        .pipe(gulp.dest('www'));
});

