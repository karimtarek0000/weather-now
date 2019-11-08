// PLUGINS
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


/////////////////////////////////////
/// CONFIGRATION

// MODE
const mode = 'development';

// OUTPUT
const output = {
    path: path.resolve(__dirname, '../dist'),
    filename: 'assets/js/[name].js',
    publicPath: '/'
};

// DEVSERVER
const devServer = {
    historyApiFallback: true,
    contentBase: 'dist',
    compress: true,
    port: 9000,
    stats: 'errors-only',
    open: true
};

// MODULE RULES
const _module = {
    rules: [
        {
            test: /\.(css|sass|scss)$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: 'css-loader?url=false',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        },
    ]
};

// MODULE EXPORT
module.exports = merge(common, {
    mode,
    output,
    devServer,
    module: _module
});