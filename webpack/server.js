const webpack = require('webpack')
const path = require('path')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const process = require('process')
const { version, vendorVersion, resolve, plugins, vendorPath } = require('./config')

const port = 3001
const host = '0.0.0.0'
const env = process.env.NODE_ENV

plugins.push(
    new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require(`${vendorPath}/manifest.min-${vendorVersion}.json`),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
        onErrors: (severity, errors) => {
            if (severity !== 'error') {
              return
            }
            const error = errors[0]
            console.log('error message:',error.message);
        },
        clearConsole: true,
    }),
    new HtmlWebpackPlugin({
        chunks: ['common', 'index'],
        chunksSortMode: 'dependency',
        template: "index.html",
        filename: `${version}/index.html`,
    }),
    new AddAssetHtmlPlugin({
        filepath: require.resolve(`${vendorPath}/vendor.min-${vendorVersion}.js`),
        includeSourcemap: false,
        publicPath: '/'
    })
)

const proxy = {
    secure: false,
    changeOrigin: true,
    target: 'http://192.168.199.231:9002',
    pathRewrite: { "^/api": "" },
}

module.exports = {
    mode: env === 'production' ? 'production' : 'development',
    devtool: '#cheap-module-eval-source-map',
    watch: true,
    watchOptions: {
        poll: true,
        ignored: /node_modules/,
    },
    cache: true,
    entry: {
        index: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://${host}:${port}`,
            'webpack/hot/only-dev-server',
            path.resolve('src'),
        ]
    },
    plugins,
    output: {
        path: path.resolve('dist'),
        filename: `${version}/[name].js`,
        publicPath: '/'
    },
    resolve,
    devServer: {
        host,
        port,
        contentBase:path.resolve('dist'),
        quiet: true,
        hot: true,
        disableHostCheck: true,
        stats: 'errors-only',
        historyApiFallback: {
            index: `/${version}/index.html`,
        },
        proxy: {
            '/api/*': proxy
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: /(src)/,
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    plugins: ['react-hot-loader/babel'],
                },
            }
        }, {
            test: /\.(css|less)$/,
            use: [{
                "loader": "style-loader",
            }, {
                "loader": "css-loader",
            },{
                "loader": "postcss-loader",
                "options": { "ident": "postcss", "plugins": [require("autoprefixer")] }
            },{
                "loader": "less-loader"
            }]
        }, {
            test: /\.(jpg|jpeg|gif|png)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000000
                }
            },
        }, {
            test: /\.(eot|ttf|woff|svg|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000000
                }
            },
        }]
    }
}