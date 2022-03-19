const { src, dest, series, watch, task } = require('gulp')
const plumber = require('gulp-plumber')
const stylus = require('gulp-stylus');
const clean = require('gulp-clean');
const pug = require('gulp-pug');

const path = {
    stylus: {
        src: './public/stylesheets',
        dist: './public/css/',
    },
    pug: {
        views: './views',
        dist: './views/compiled/'
    }
}

async function cleanTask() {
    await src(path.stylus.dist + '*.css', { read: false, allowEmpty: true })
        .pipe(clean());
}

async function stylusTask() {
    return await src(path.stylus.src + '/**/*')
        .pipe(plumber())
        .pipe(stylus({ compress: true }))
        .pipe(dest(path.stylus.dist));
}
async function pugTask() {
    return await src(path.pug.views + '/**/*.pug')
        .pipe(pug({}))
        .pipe(dest(path.pug.dist))
}

function watchTask() {
    watch(path.stylus.src + '/**/*.styl', series(cleanTask, stylusTask));
}

if(process.env.GULP_WATCH) task('default', series(cleanTask, stylusTask, watchTask));
else task('default', series(cleanTask, stylusTask));
