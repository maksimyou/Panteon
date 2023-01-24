let gulp, { src, dest, series, parallel, watch } = require('gulp');
let cleanCSS = require('gulp-clean-css');
let cleanJS = require('gulp-uglify');
let sass = require('gulp-sass')(require('sass'));
let rename = require('gulp-rename');
let autoprefixer = require('gulp-autoprefixer');
let concat = require('gulp-concat');
let del = require('del');
let iconfont = require('gulp-iconfont');
let imagemin = require('gulp-imagemin');
let ttf2woff2 = require('gulp-ttf2woff2');
// Объединяет все @media
let cmq = require('gulp-group-css-media-queries');
let fileinclude = require('gulp-file-include');







//---------------------------------------------------Задачи---------------------------------------------------------


//Объединение файлов html в одну страинцу 
function taskHTML() {
    return src('src/index.html')
        .pipe(fileinclude())
        .pipe(dest('dist'));
};


//Очищение папки dist
function taskDel() {
    return del('dist/*');
};


//Задачи над css файлами
function taskCSS() {
    return src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 5 versions"]
        }))
        .pipe(cmq())
        .pipe(cleanCSS())
        .pipe(concat('bundle.css'))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(dest('dist/css'));
};
function taskCSSloaded() {
    return src('./src/scss/swiper-bundle.min.css')
        .pipe(sass())
        .pipe(dest('dist/css'));
};

//Задачи над JS файлами
function taskJS() {
    return src('src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(cleanJS())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('dist/js'));
};
function taskJSloaded() {
    return src('src/js/swiper-bundle.min.js')
        .pipe(dest('dist/js'));
};

//Задачи над изображениями (минимизирует)

function taskIMG() {
    return src('src/img/**/*.{jpg,png,svg,gif,ico,webp}')
        .pipe(imagemin())
        .pipe(dest('dist/img'));
};


//Задачи над шрифтами (преобразует и загружает оригинал)

function taskFonts() {
    return src('src/fonts/*.{ttf,eot,svg,woff,woff2}')
        .pipe(ttf2woff2())
        .pipe(dest('dist/fonts'));
};

function taskFontsTtf() {
    return src('src/fonts/*.ttf')
        .pipe(dest('dist/fonts'));
};
function watchCssHTML() {
    watch('./src/scss/*.scss', taskCSS);
    watch('./src/pages/**/*.html', taskHTML);
    watch('src/js/*.js', taskJS);

}

exports.default = series(taskDel, parallel(taskCSS, taskJS, taskIMG, taskFonts, taskHTML, taskFontsTtf, taskCSSloaded, taskJSloaded), watchCssHTML);