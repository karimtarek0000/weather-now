// PLUGINS
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// VENDOR
const VENODE_LIBS = [
    "jquery",
    "axios",
    "greensock"
];

/////////////////////////////////////
/// CONFIGRATION

// ENTRY
const entry = {
    bundle: ['@babel/polyfill', './src/assets/js/main.js'],
    vendor: VENODE_LIBS
};

// PERFORMANCE
const performance = {
    hints: false
};

// OPTIMIZATION
const optimization = {
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all'
            }
        }
    },
};

// DEVTOOL
const devtool = 'inline-source-map';

// RESOLVE
const resolve = {
    extensions: ['.css', '.sass', '.scss', '.vue', '.js', '.json'],
    alias: {
        'sass': path.resolve(__dirname, '../src/assets/sass'),
        // 'vue$': 'vue/dist/vue.esm.js'
    }
};

// MODULE RULES
const _module = {
    rules: [
        {
            test: /\.pug$/,
            use: 'pug-loader'
        },
        {
            test: /\.(png|jpg|jpeg|svg|gif)$/i,
            use: 'url-loader'
        },
        {
            test: /\.js$/,
            use: 'babel-loader'
        }
    ]
};

//// PLUGINS

// FUNCTION HTML PLUGIN
const htmlPlugin = function(nameEntry, nameOut, extEntry, extOut) {
    return new HtmlWebpackPlugin({
        filename: `${nameOut}.${extOut}`,
        template: `./src/assets/${nameEntry}.${extEntry}`
    });
};

// PLUGINS
const plugins = [
    htmlPlugin('index', 'index', 'pug', 'html'),
    new MiniCssExtractPlugin({
        filename: './assets/css/style.css'
    }),
    new CleanWebpackPlugin(),
];

// MODULE EXPORT
module.exports = {
    entry,
    performance,
    optimization,
    devtool,
    resolve,
    module: _module,
    plugins
}
