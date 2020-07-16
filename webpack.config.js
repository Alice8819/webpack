const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    module:{
        rules:[
            {
                test:/\.(sss)|(pcss)|(postcss)/,
                use:['style-loader','css-loader?modules','postcss-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ],
    devServer:{
        open:true,
    }
}