var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');



module.exports = {
    mode:'development',
    devtool:'source-map',
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({   
            template:'./src/index.html', 
        }), 

    ],
    devServer:{
        open:true,  // 自动打开
    },
    stats:{  // 放devServer 外面  也可以
        colors:true,
        modules:false,
    },
    module:{
        rules:[
            {
                test:/\.(jpg)|(png)|(tif)/g,
                use:{
                    loader:'url-loader',
                    options:{
                        name:'[name].[hash:5].[ext]',  //  name: 源文件的名字，file-loader里的hash跟contenthash一样，ext:源文件后缀名
                        limit:100*1024, //只要文件不超过 100*1024 字节，则使用base64编码，否则，交给file-loader进行处理
                    }
                }
            }
        ]
    }
}