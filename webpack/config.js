const webpack = require('webpack')
const path = require('path')
const version = '1.0.0'
const vendorVersion = '1.0.1' //vendor版本号
const distPath = path.resolve('./dist')
const vendorPath = path.resolve(__dirname, `./vendor/${vendorVersion}`)
const isProduction = process.env.NODE_ENV === 'production'
const resolve = {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', path.resolve('./src')],
    alias: {
        'src': path.resolve('./src'),
        'pages': path.resolve('./src/pages'),
        'actions': path.resolve('./src/actions'),
        'reducers': path.resolve('./src/reducers'),
    }
}

//环境对应oss上目录,该发布脚本只支持dev和qa环境，生产环境需运维单独发布
let ossFolder = isProduction ? '/qa' : '/test'
// 开发环境直接使用oss的文件，线上环境使用cdn上的路径加速
const __ASSETS_PATH__ = ''

const plugins = [
    //定义常量
    new webpack.DefinePlugin({
        __PROD__: isProduction,
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.ProvidePlugin({
        React: 'react',
    })
]
module.exports = {
    __ASSETS_PATH__,
    isProduction,
    version,
    vendorVersion,
    distPath,
    resolve,
    plugins,
    ossFolder,
    vendorPath,
}