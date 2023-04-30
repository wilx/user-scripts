const path = require('path');
const us = require('webpack-userscript');
const JsDocPlugin = require('jsdoc-webpack-plugin');
const LimitChunkCountPlugin = require('webpack/lib/optimize/LimitChunkCountPlugin');

let includeOnSites = [
    /^https?:\/\/www\.ceska-justice\.cz\/.*$/,
    /^https?:\/\/www\.zdravotnickydenik\.cz\/.*$/,
    /^https?:\/\/(.+\.)?(ihned|hn)\.(cz|news)\/.*$/,
    /^https?:\/\/.+\.aktualne\.cz\/.*$/,
    /^https?:\/\/www\.ceskenoviny\.cz\/.*$/,
    /^https?:\/\/.+\.idnes\.cz\/.*$/,
    /^https?:\/\/.+\.reflex\.cz\/.*$/,
    /^https?:\/\/.+\.respekt\.cz\/.*$/,
    /^https?:\/\/.+\.ceskatelevize\.cz\/.*$/,
    /^https?:\/\/.+\.seznam\.cz\/.*$/,
    /^https?:\/\/.+\.seznamzpravy\.cz\/.*$/,
    /^https?:\/\/.+\.lidovky\.cz\/.*$/,
    /^https?:\/\/svobodneforum\.cz\/.*$/,
    /^https?:\/\/.+\.rozhlas\.cz\/.*$/,
    /^https?:\/\/mediahub\.cz\/.*$/,
    /^https?:\/\/.+\.novinky\.cz\/.*$/,
    /^https?:\/\/news\.google\.com\/.*$/,
    /^https?:\/\/.+\.info\.cz\/.*$/,
    /^https?:\/\/.+\.tyden\.cz\/.*$/,
    /^https?:\/\/cs\.wikipedia\.org\/.*$/,
    /^https?:\/\/(www\.)?echo24\.cz\/.*$/,
    /^https?:\/\/.+\.parlamentnilisty\.cz\/.*$/,
    /^https?:\/\/(.+\.)?forum24\.cz\/.*$/,
    /^https?:\/\/(.+\.)?euro\.cz\/.*$/,
    /^https?:\/\/(.+\.)?zpovednice\.cz\/.*$/,
    /^https?:\/\/(.+\.)?e15\.cz\/.*$/,
    /^https?:\/\/(.+\.)?neovlivni\.cz\/.*$/,
    /^https?:\/\/www\.sysifos\.cz\/.*$/,
    /^https?:\/\/(.+\.)?denikreferendum\.cz\/.*$/,
    /^https?:\/\/(.+\.)?neviditelnypes.lidovky\.cz\/.*$/,
    /^https?:\/\/(.+\.)?denik\.cz\/.*$/,
    /^https?:\/\/(.+\.)?irozhlas\.cz\/.*$/,
    /^https?:\/\/(.+\.)?epravo\.cz\/.*$/,
    /^https?:\/\/www\.ahaonline\.cz\/.*$/,
    /^https?:\/\/www\.christnet\.eu\/.*$/,
    /^https?:\/\/tn\.nova\.cz\/.*$/,
    /^https?:\/\/www\.autoforum\.cz\/.*$/
];
includeOnSites = includeOnSites.map((x) => x.toString());

module.exports = {
    mode: 'production',
    entry: {
        'hyphenator-for-czech-language': path.join(__dirname, 'src', 'hyphenator-for-czech-language.js')
    },
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'hyphenator-for-czech-language.js'
    },
    module: {
        rules: [
            {
                test: /\.(m?js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    debug: true,
                                    useBuiltIns: 'usage',
                                    corejs: '3',
                                    shippedProposals: true
                                }
                            ]
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            'babel-plugin-transform-regexp-constructors',
                            'babel-plugin-minify-constant-folding',
                            'babel-plugin-minify-guarded-expressions',
                            //'babel-plugin-minify-flip-comparisons',
                            ['babel-plugin-transform-remove-undefined', {
                                tdz: true
                            }],
                            'babel-plugin-transform-simplify-comparison-operators',
                            ['babel-plugin-minify-dead-code-elimination', {
                                tdz: true
                            }]
                        ]
                    }
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    optimization: {
        minimize: false
    },
    plugins: [
        new LimitChunkCountPlugin({
            maxChunks: 1
        }),
        new us.UserscriptPlugin({
            headers (original) {
                return {
                    ...original,
                    name: '[name]',
                    //version: '[version]',
                    author: 'wilx',
                    homepage: 'https://github.com/wilx/user-scripts/hyphenator-for-czech-language',
                    namespace: 'https://github.com/wilx/user-scripts/hyphenator-for-czech-language',
                    downloadURL: 'https://github.com/wilx/user-scripts/raw/master/hyphenator-for-czech-language/output/hyphenator-for-czech-language.user.js',
                    'run-at': 'document-end',
                    grant: 'none',
                    noframes: true,
                    include: includeOnSites
                }
            },
            pretty: true
        }),
        new JsDocPlugin({
            conf: path.join(__dirname, 'jsdoc.conf.json')
        })
    ],
    resolve: {
        alias: {
            node_modules: path.join(__dirname, 'node_modules')
        },
        extensions: ['.ts', '.tsx', '.js', '.json', '.wasm']
    }
};
