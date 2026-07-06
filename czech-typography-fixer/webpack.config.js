const path = require('path');
const us = require('webpack-userscript');
const JsDocPlugin = require('jsdoc-webpack-plugin');
const LimitChunkCountPlugin = require('webpack/lib/optimize/LimitChunkCountPlugin');

const includeOnSites = [
    '*://www.ceska-justice.cz/*',
    '*://www.zdravotnickydenik.cz/*',
    '*://ihned.cz/*',
    '*://*.ihned.cz/*',
    '*://ihned.news/*',
    '*://*.ihned.news/*',
    '*://*.aktualne.cz/*',
    '*://www.ceskenoviny.cz/*',
    '*://*.hn.cz/*',
    '*://*.reflex.cz/*',
    '*://*.respekt.cz/*',
    '*://*.ceskatelevize.cz/*',
    '*://*.seznam.cz/*',
    '*://*.seznamzpravy.cz/*',
    '*://*.lidovky.cz/*',
    '*://svobodneforum.cz/*',
    '*://*.rozhlas.cz/*',
    '*://mediahub.cz/*',
    '*://*.novinky.cz/*',
    '*://news.google.com/*',
    '*://*.info.cz/*',
    '*://*.tyden.cz/*',
    '*://cs.wikipedia.org/*',
    '*://echo24.cz/*',
    '*://www.echo24.cz/*',
    '*://*.parlamentnilisty.cz/*',
    '*://forum24.cz/*',
    '*://*.forum24.cz/*',
    '*://euro.cz/*',
    '*://*.euro.cz/*',
    '*://zpovednice.cz/*',
    '*://*.zpovednice.cz/*',
    '*://e15.cz/*',
    '*://*.e15.cz/*',
    '*://neovlivni.cz/*',
    '*://*.neovlivni.cz/*',
    '*://www.sysifos.cz/*',
    '*://denikreferendum.cz/*',
    '*://*.denikreferendum.cz/*',
    '*://neviditelnypes.lidovky.cz/*',
    '*://*.neviditelnypes.lidovky.cz/*',
    '*://denik.cz/*',
    '*://*.denik.cz/*',
    '*://irozhlas.cz/*',
    '*://*.irozhlas.cz/*',
    '*://epravo.cz/*',
    '*://*.epravo.cz/*',
    '*://www.ahaonline.cz/*',
    '*://tn.nova.cz/*',
    '*://www.autoforum.cz/*'
];

module.exports = {
    mode: 'production',
    entry: {
        'czech-typography-fixer': path.join(__dirname, 'src', 'czech-typography-fixer.js')
    },
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'czech-typography-fixer.js',
        chunkFormat: false
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    debug: true,
                                    shippedProposals: true
                                }
                            ]
                        ],
                        plugins: [
                            ['polyfill-corejs3', {
                                method: 'usage-global',
                                version: require('core-js/package.json').version,
                                shippedProposals: true
                            }],
                            '@babel/plugin-transform-runtime'
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
            headers(original) {
                return {
                    ...original,
                    name: '[name]',
                    //version: '[version]',
                    author: 'wilx',
                    homepage: 'https://github.com/wilx/user-scripts/czech-typography-fixer',
                    namespace: 'https://github.com/wilx/user-scripts/czech-typography-fixer',
                    downloadURL: 'https://github.com/wilx/user-scripts/raw/master/czech-typography-fixer/output/czech-typography-fixer.user.js',
                    updateURL: 'https://github.com/wilx/user-scripts/raw/master/czech-typography-fixer/output/czech-typography-fixer.user.js',
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
