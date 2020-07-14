const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:{                                 // 1
        list:'./list/list.js',           
        detail:'./detail/detail.js',
    },
    context:path.resolve(__dirname,'src'),  // 作用于入口和loaders   作用  1 , 2 , 3 处
    output:{
        filename:'scripts/[name].[chunkhash:5].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./list.html',       // 2    如果模板文件没放在src，比如放在public,则不能配置context
            filename:'list.html',
            chunks:['list'],
        }),
        new HtmlWebpackPlugin({
            template:'./detail.html',
            filename:'detail.html',
            chunks:['detail'],
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: './', to: './' }, // to dist 里面       // 3
            ],
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
        })
    ],
    stats:{
        colors:true,
        modules:false,
    },
}