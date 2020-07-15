const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader',{
                    loader:"css-loader",
                    options:{
                        modules:{
                            localIdentName:'[path][local]-[hash:base64:5]'
                        }
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
}

