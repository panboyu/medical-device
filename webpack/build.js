const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { version, vendorVersion, resolve, plugins, __ASSETS_PATH__, vendorPath, isProduction } = require('./config')

module.exports = function (env) {
    const appVersion = version
    plugins.push(
        new CleanWebpackPlugin(path.resolve('dist'), {root:path.resolve()}),
        new ParallelUglifyPlugin({
            uglifyJS: {
                // 最紧凑的输出
                output: {
                // beautify: false
                },
                // 删除所有的注释
                // comments: false, //default false
                compress: {
                    // 在UglifyJs删除没有用到的代码时不输出警告  
                    warnings: false, //默认
                    // 删除所有的 `console` 语句
                    // 还可以兼容ie浏览器
                    drop_console: isProduction,
                    // 内嵌定义了但是只用到一次的变量
                    collapse_vars: true,
                    // 提取出出现多次但是没有定义成变量去引用的静态值
                    reduce_vars: true,
                }
            }
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(`${vendorPath}/manifest.min-${vendorVersion}.json`),
        }),
        new HtmlWebpackPlugin({
            chunks: ['common', 'index'],
            chunksSortMode: 'dependency',
            template: "./index.html",
            filename: `${appVersion}/index.html`,
        }),
        new MiniCssExtractPlugin({
            filename: `${appVersion}/[name].css`,
        }),
        new AddAssetHtmlPlugin({
            filepath: require.resolve(`${vendorPath}/vendor.min-${vendorVersion}.js`),
            includeSourcemap: false,
            typeOfAsset: 'js',
            publicPath: __ASSETS_PATH__ + '/'
        })
    )
    return {
        mode:process.env.NODE_ENV,
        entry: {
            index: [
                // '@babel/polyfill',
                path.resolve('./src'),
            ]
        },
        performance: {
            hints: false
        },
        plugins,
        output: {
            path: path.resolve('./dist'),
            filename: `${appVersion}/[name].js`,
            publicPath: __ASSETS_PATH__ + '/'
        },
        stats: {
            colors: true,
            children: false,
        },
        resolve,
        optimization: {
            // runtimeChunk: {
            //     name: "manifest"
            // },
            splitChunks: {
                chunks: "all",
                minSize: 30000,
                minChunks: 2,
                name:'common',
            }
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                include: /(src)/,
                loader: 'babel-loader'
            }, {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    { "loader": "postcss-loader", "options": { "ident": "postcss", "plugins": [require("autoprefixer")] } },
                    "less-loader"
                ]
            },  {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    publicPath: __ASSETS_PATH__,
                    name: `static/images/[name].[ext]`
                }
            }, {
                test: /\.(eot|ttf|woff|svg|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    publicPath: __ASSETS_PATH__,
                    name: `static/fonts/[name].[ext]`
                }
            }]
        }
    }
}