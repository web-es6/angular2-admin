const path                       = require('path');
const webpack                    = require('webpack');
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
    entry  : {
        'polyfills': './src/polyfills.browser.ts',
        'vendor'   : './src/vendor.browser.ts',
        'main'     : './src/main.browser.ts'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules   : [path.resolve(__dirname, '../src'), 'node_modules'],
    },
    module : {
        exprContextCritical: false,
        rules              : [{
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
            test   : /\.css$/,
            loaders: ['to-string-loader', 'css-loader']
        }, {
            test   : /\.scss$/,
            loaders: ['to-string-loader', 'css-loader', 'sass-loader']
        }, {
            test   : /\.html$/,
            loaders: ['raw-loader'],
        }, {
            test  : /\.(jpg|jpeg|png|gif|svg)$/,
            loader: 'url?limit=50000',
        }, {
            test  : /\.(woff|woff2|ttf)$/,
            loader: 'file'
        },
        ],

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
