const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const common = require('./common')

// https://github.com/webpack/webpack/issues/2852
// 此方式适用于 npm 安装之后
// 所有手写代码打包
const nodeModules = () => fs
    .readdirSync(path.resolve(__dirname, '..', 'node_modules'))
    .concat(['react-dom/server'])
    .filter((x) => ['.bin'].indexOf(x) === -1)
    .reduce((ext, mod) => {
        ext[mod] = ['commonjs', mod].join(' ') // eslint-disable-line no-param-reassign
        return ext
    }, {})

module.exports = (appPath) => ({
    target: 'async-node',
    devtool: 'source-map',
    watch: false,
    entry: [
        path.resolve(appPath, './server/server.js')
    ],
    output: {
        filename: 'server.js',
        chunkFilename: '[id].chunk.js',
        path: appPath + '/dist/server',
        publicPath: '/dist/server/'
    },
    module: {
        rules: [...common.rules]
    },
    plugins: [
        new webpack.DefinePlugin({
            '__CLIENT__': false,
            '__SERVER__': true,
            '__DEV__': false
        }),
        ...common.plugins
    ],
    externals: nodeModules()
})
