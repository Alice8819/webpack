module.exports = {
    mode:'development',
    module:{
        rules:[
            {
                test:/\.(img)|(png)|(tif)/g,
                use:{
                    loader:'./loaders/img-loader',
                    options:{
                        limit:10000,  // 10000字节以上使用图片，以内使用base64
                        name:'img-[contenthash:5].[ext]'   // [contenthash]:根据具体某一个文件生成的hash
                    }
                }
            }
        ]
    }
}