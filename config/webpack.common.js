const path                       = require('path');
const webpack                    = require('webpack');
const ExtractTextPlugin          = require("extract-text-webpack-plugin");
const CopyWebpackPlugin          = require('copy-webpack-plugin');
const HtmlWebpackPlugin          = require('html-webpack-plugin');
const CommonsChunkPlugin         = require('webpack/lib/optimize/CommonsChunkPlugin');
const LoaderOptionsPlugin        = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin   = require('webpack/lib/ContextReplacementPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const HMR      = process.argv.join('').indexOf('hot') > -1;
const METADATA = {
    title      : '上海则一物流有限公司',
    baseUrl    : '/',
    isDevServer: process.argv.join('').indexOf('webpack-dev-server') > -1
};

module.exports = {
    output : {
        path             : path.resolve(__dirname, '../dist'),
        filename         : '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename    : '[id].chunk.js'
    },
    entry  : {
        'polyfills': path.resolve(__dirname, '../src/polyfills.browser.ts'),
        'vendor'   : path.resolve(__dirname, '../src/vendor.browser.ts'),
        'main'     : path.resolve(__dirname, '../src/main.browser.ts'),
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules   : [path.resolve(__dirname, '../src'), 'node_modules'],
    },
    module: {
        exprContextCritical: false,
        rules              : [
            // {
            //     test   : /\.ts$/,
            //     loader : 'tslint-loader',
            //     exclude: /(node_modules)/,
            //     enforce: 'pre'
            // },
            {
                test   : /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular2-router-loader',
                ],
                exclude: [/\.(spec|e2e)\.ts$/]
            }, {
                test  : /\.json$/,
                loader: 'json-loader'
            }, {
                test   : /\.scss$/,
                loader : ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader        : 'css-loader!sass-loader'
                }),
                exclude: [/[\/|\\]app[\/|\\]/]
            }, {
                test   : /\.css$/,
                loaders: ['to-string-loader', 'css-loader'],
                exclude: [/[\/|\\]assets[\/|\\]/]
            }, {
                test   : /\.scss$/,
                loaders: ['to-string-loader', 'css-loader', 'sass-loader'],
                exclude: [/[\/|\\]assets[\/|\\]/]
            }, {
                test   : /\.html$/,
                loaders: ['html-loader'],
            }, {
                test  : /\.(jpg|jpeg|png|gif|svg)$/,
                loader: 'url-loader?limit=50000',
            }, {
                test  : /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            }],
    },

    plugins: [
        new CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../src/pages'),
        }]),
        new HtmlWebpackPlugin({
            template      : 'src/index.ejs',
            chunksSortMode: 'dependency',
            metadata      : METADATA,
            filename      : 'index.html',
            inject        : 'head',
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new ExtractTextPlugin("styles.bundle.css")
    ],

    node: {
        global        : true,
        crypto        : 'empty',
        process       : true,
        module        : false,
        clearImmediate: false,
        setImmediate  : false
    }

};
