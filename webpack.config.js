var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


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
        // index:'index.html', // 默认   得有一个index.html
        port:8000,
        open:true,  // 自动打开
        proxy:{  // 代理规则
            '/api':{ // /api 用于正则表达式   '/api':'http://open.duyiedu.com'
            
                target:'http://open.duyiedu.com', 
                changeOrigin:true,  // 更改请求头中的host和origin等于target  有些服务器不认地址就认host
            }
        },
        stats:{  // 放devServer 外面  也可以
            colors:true,
            modules:false,
        }
    }
}