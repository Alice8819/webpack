var webpackProd = require('./webpack.prod');
var webpackDev = require('./webpack.dev');
var webpackBase = require('./webpack.base');

module.exports = function (env) {
    if (env && env.prod) {
        return {
            ...webpackProd,
            ...webpackBase,
        }
    } else {
        return {
            ...webpackDev,
            ...webpackBase,
        }
    }
}