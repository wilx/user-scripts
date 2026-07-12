const path = require('path');
const us = require('webpack-userscript');
const JsDocPlugin = require('jsdoc-webpack-plugin');
const LimitChunkCountPlugin = require('webpack/lib/optimize/LimitChunkCountPlugin');
const coreJsVersion = require('core-js/package.json').version;

class InlineHyphenopolyPatternsPlugin {
    apply (compiler) {
        compiler.hooks.thisCompilation.tap('InlineHyphenopolyPatternsPlugin', compilation => {
            compilation.hooks.processAssets.tap(
                {
                    name: 'InlineHyphenopolyPatternsPlugin',
                    stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE
                },
                assets => {
                    for (const assetName of Object.keys(assets)) {
                        if (!assetName.endsWith('.js')) {
                            continue;
                        }

                        const asset = compilation.getAsset(assetName);
                        const source = asset.source.source().toString();
                        const updated = source.replaceAll(
                            "new URL('./patterns/', __webpack_require__.b)",
                            'undefined'
                        );

                        if (updated !== source) {
                            compilation.updateAsset(
                                assetName,
                                new compiler.webpack.sources.RawSource(updated)
                            );
                        }
                    }
                }
            );
        });
    }
}

const matchOnSites = [
    '*://www.ceska-justice.cz/*',
    '*://www.zdravotnickydenik.cz/*',
    '*://*.ihned.cz/*',
    '*://ihned.cz/*',
    '*://*.hn.cz/*',
    '*://hn.cz/*',
    '*://*.ihned.news/*',
    '*://ihned.news/*',
    '*://*.hn.news/*',
    '*://hn.news/*',
    '*://*.aktualne.cz/*',
    '*://www.ceskenoviny.cz/*',
    '*://*.idnes.cz/*',
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
    '*://prozeny.cz/*',
    '*://*.prozeny.cz/*',
    '*://super.cz/*',
    '*://*.super.cz/*',
    '*://garaz.cz/*',
    '*://*.garaz.cz/*',
    '*://sport.cz/*',
    '*://*.sport.cz/*',
    '*://news.google.com/*',
    '*://*.info.cz/*',
    '*://*.tyden.cz/*',
    '*://cs.wikipedia.org/*',
    '*://www.echo24.cz/*',
    '*://echo24.cz/*',
    '*://*.parlamentnilisty.cz/*',
    '*://*.forum24.cz/*',
    '*://forum24.cz/*',
    '*://*.euro.cz/*',
    '*://euro.cz/*',
    '*://*.zpovednice.cz/*',
    '*://zpovednice.cz/*',
    '*://*.e15.cz/*',
    '*://e15.cz/*',
    '*://*.neovlivni.cz/*',
    '*://neovlivni.cz/*',
    '*://www.sysifos.cz/*',
    '*://*.denikreferendum.cz/*',
    '*://denikreferendum.cz/*',
    '*://*.neviditelnypes.lidovky.cz/*',
    '*://neviditelnypes.lidovky.cz/*',
    '*://*.denik.cz/*',
    '*://denik.cz/*',
    '*://*.irozhlas.cz/*',
    '*://irozhlas.cz/*',
    '*://*.epravo.cz/*',
    '*://epravo.cz/*',
    '*://www.ahaonline.cz/*',
    '*://www.christnet.eu/*',
    '*://tn.nova.cz/*',
    '*://www.autoforum.cz/*'
];

module.exports = {
    mode: 'production',
    entry: {
        'hyphenator-for-czech-language': path.join(__dirname, 'src', 'hyphenator-for-czech-language.js')
    },
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'hyphenator-for-czech-language.js',
        chunkFormat: false
    },
    module: {
        rules: [
            {
                test: /\.wasm$/,
                type: 'asset/inline'
            },
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
                                    shippedProposals: true
                                }
                            ]
                        ],
                        plugins: [
                            ['polyfill-corejs3', {
                                method: 'usage-global',
                                version: coreJsVersion,
                                proposals: true
                            }],
                            '@babel/plugin-transform-runtime',
                            'babel-plugin-transform-regexp-constructors',
                            'babel-plugin-minify-constant-folding',
                            'babel-plugin-minify-guarded-expressions',
                            //'babel-plugin-minify-flip-comparisons',
                            ['babel-plugin-transform-remove-undefined', {
                                tdz: true
                            }],
                            'babel-plugin-transform-simplify-comparison-operators'
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
        new InlineHyphenopolyPatternsPlugin(),
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
                    updateURL: 'https://github.com/wilx/user-scripts/raw/master/hyphenator-for-czech-language/output/hyphenator-for-czech-language.user.js',
                    'run-at': 'document-end',
                    grant: 'none',
                    noframes: true,
                    match: matchOnSites
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
