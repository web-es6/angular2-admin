const path         = require('path');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const DefinePlugin        = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin  = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST     = process.env.HOST || 'localhost';
const PORT     = process.env.PORT || 3000;
const HMR      = process.argv.join('').indexOf('hot') > -1;
const METADATA = webpackMerge(commonConfig.metadata, {
    host: HOST,
    port: PORT,
    ENV : ENV,
    HMR : HMR
});

module.exports = function() {
    return webpackMerge(commonConfig, {
        devtool: 'cheap-module-source-map',
        output : {
            path             : path.resolve(__dirname, '../dist'),
            filename         : '[name].bundle.js',
            sourceMapFilename: '[name].map',
            chunkFilename    : '[id].chunk.js',
            library          : 'ac_[name]',
            libraryTarget    : 'var',
        },

        plugins  : [
            new DefinePlugin({
                'ENV'        : JSON.stringify(METADATA.ENV),
                'HMR'        : METADATA.HMR,
                'process.env': {
                    'ENV'     : JSON.stringify(METADATA.ENV),
                    'NODE_ENV': JSON.stringify(METADATA.ENV),
                    'HMR'     : METADATA.HMR,
                }
            }),
            new NamedModulesPlugin(),
            new LoaderOptionsPlugin({
                debug  : true,
                options: {
                    tslint: {
                        emitErrors  : false,
                        failOnHint  : false,
                        resourcePath: 'src'
                    },

                }
            }),

        ],
        devServer: {
            port              : METADATA.port,
            host              : METADATA.host,
            historyApiFallback: true,
            watchOptions      : {
                aggregateTimeout: 300,
                poll            : 1000
            },
            proxy             : {
                '/api/*': {
                    target: 'http://localhost:8000',
                    secure: false
                }
            },
            contentBase       : path.resolve(__dirname, '../dist'),
        },
        node     : {
            global        : true,
            crypto        : 'empty',
            process       : true,
            module        : false,
            clearImmediate: false,
            setImmediate  : false
        }

    });
}
