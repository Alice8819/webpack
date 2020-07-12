var ListFilePlugin = require('./plugins/listFilePlugin');

module.exports = {
    mode:'development',
    devtool:'source-map',
    plugins:[
        new ListFilePlugin('111.md'),
    ]
}