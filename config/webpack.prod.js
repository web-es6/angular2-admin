const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const DefinePlugin        = require('webpack/lib/DefinePlugin');
const IgnorePlugin        = require('webpack/lib/IgnorePlugin');
const NamedModulesPlugin  = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ProvidePlugin       = require('webpack/lib/ProvidePlugin');
const UglifyJsPlugin      = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash      = require('webpack-md5-hash');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const HOST     = process.env.HOST || 'localhost';
const PORT     = process.env.PORT || 8080;
const METADATA = webpackMerge(commonConfig.metadata, {
    host: HOST,
    port: PORT,
    ENV : ENV,
    HMR : false
});

module.exports = function() {
    return webpackMerge(commonConfig, {
        plugins: [
            new WebpackMd5Hash(),
            new NamedModulesPlugin(),
            // NOTE: when adding more properties make sure you include them in custom-typings.d.ts
            new DefinePlugin({
                'ENV'        : JSON.stringify(METADATA.ENV),
                'HMR'        : METADATA.HMR,
                'process.env': {
                    'ENV'     : JSON.stringify(METADATA.ENV),
                    'NODE_ENV': JSON.stringify(METADATA.ENV),
                    'HMR'     : METADATA.HMR,
                }
            }),
            new UglifyJsPlugin({
                beautify: false,
                mangle  : {
                    screw_ie8  : true,
                    keep_fnames: false,
                },
                compress: {
                    screw_ie8: true
                },
                comments: false,
            }),
            new LoaderOptionsPlugin({
                debug  : false,
                minimize: true,
                options: {
                    htmlLoader: {
                        minimize             : true,
                        removeAttributeQuotes: false,
                        caseSensitive        : true,
                        customAttrSurround   : [
                            [/#/, /(?:)/],
                            [/\*/, /(?:)/],
                            [/\[?\(?/, /(?:)/]
                        ],
                        customAttrAssign     : [/\)?\]?=/]
                    }
                }
            }),

        ]

    });
};
