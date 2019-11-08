// PLUGINS
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/////////////////////////////////////
/// CONFIGRATION

// MODE
const mode = "production";

// OUTPUT
const output = {
    path: path.resolve(__dirname, '../dist'),
    filename: 'assets/js/[name][contenthash:5].js',
    // publicPath: ''
};

// OPTIMIZATION
const optimization = {
    minimizer: [new OptimizeCssAssetsWebpackPlugin(), new TerserWebpackPlugin()]
};

// MODULE RULES
const _module = {
    rules: [
       {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: [
            {
               loader: MiniCssExtractPlugin.loader,
            },
            {
                loader: 'css-loader?url=false',
                options: { sourceMap: true }
            },
            {
                loader: 'postcss-loader',
                options: { sourceMap: true }
            },
            {
                loader: 'sass-loader',
                options: { sourceMap: true }
            }
        ]
       }

    ]
};

// MODULE EXPORT
module.exports = merge(common, {
    mode,
    output,
    optimization,
    module: _module
});

