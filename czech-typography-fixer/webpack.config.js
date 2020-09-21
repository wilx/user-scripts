const path = require('path');
const WebpackUserscript = require('webpack-userscript');
const JsDocPlugin = require('jsdoc-webpack-plugin');

var includeOnSites = [
    /^https?:\/\/www\.ceska-justice\.cz\/.*$/,
    /^https?:\/\/www\.zdravotnickydenik\.cz\/.*$/,
    /^https?:\/\/(.+\.)?ihned\.(cz|news)\/.*$/,
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
    /^https?:\/\/tn\.nova\.cz\/.*$/
];
includeOnSites = includeOnSites.map((x) => x.toString());

module.exports = {
    mode: 'production',
    entry: {
        'czech-typography-fixer': path.join(__dirname, 'src', 'czech-typography-fixer.js')
    },
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'czech-typography-fixer.js'
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
                                    useBuiltIns: 'usage',
                                    corejs: '3'
                                }
                            ]
                        ],
                        plugins: [
                            'babel-plugin-minify-dead-code-elimination'
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
        new WebpackUserscript({
            headers: {
                name: '[name]',
                version: '[version]',
                author: 'wilx',
                homepage: 'https://github.com/wilx/user-scripts/czech-typography-fixer',
                namespace: 'https://github.com/wilx/user-scripts/czech-typography-fixer',
                'run-at': 'document-end',
                grant: 'none',
                noframes: true,
                include: includeOnSites
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
        }
    }
};
