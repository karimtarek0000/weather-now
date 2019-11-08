// ALL VARIABLES
const {
    dest,
    watch,
    src,
    task,
    series,
    parallel
} = require('gulp');
const webpack = require('webpack-stream');
const imagemin = require('gulp-imagemin');
const imageminPngquat = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const WebpackDevServer = require('webpack-dev-server');
const liveReload = require('gulp-livereload');

// SRC PATH
const MainJS = './src/main.js';
const IMAGE_PATH = './src/assets/img/**/*.{jpg,jpeg,png,svg}';

// DEST PATH
const Dest = './dist';

// MODE
const Development = require('./config/webpack.dev.js');
const Production = require('./config/webpack.prod.js');

/////////////////////////////////////////////
/// ALL TASKS
// DEVWEBPACK
const devWebpack = () => {
    return src(MainJS)
        .pipe(webpack(Development))
        .pipe(dest(Dest))
        .pipe(liveReload())
};

// PRODWEBPACK
const prodWebpack = () => {
    return src(MainJS)
        .pipe(webpack(Production))
        .pipe(dest(Dest))
};

// IMAGECOMPRESSED
const imageComp = () => {
    return src(IMAGE_PATH)
        .pipe(imagemin([
            imagemin.gifsicle(),
            imagemin.jpegtran(),
            imagemin.svgo(),
            imageminPngquat(),
            imageminJpegRecompress(),
        ]))
        .pipe(dest(Dest + '/assets/img'))
        .pipe(liveReload())
};

// IMAGE MOVE -- DEVELOPMENT
const imageMove = () => {
    return src(IMAGE_PATH)
        .pipe(dest(Dest + '/assets/img'))
        .pipe(liveReload())
};

// WATCH MANGER
const watchManger = () => {

    // SERVER AND LIVE RELOAD
    // require('./server.js');
    // liveReload.listen();

    // WATCH DEVWEBPACK
    // watch(['./src', './webpack.dev.js'], series(devWebpack));

    // WATCH IMAGECOMP
    watch(IMAGE_PATH, { events: 'add' }, series(imageMove));
};

/////////////////////////////////////////////
/// RUN ALL FUNCTION
// BUILD
exports.build = parallel(prodWebpack, imageComp);

// DEFAULT
// exports.default = parallel(devWebpack, imageMove, watchManger);
exports.default = parallel(imageMove, watchManger);
