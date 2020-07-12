module.exports = {
    mode:'development',
    module:{
        rules:[
            {
                test:/\.css$/g,
                use:['./loaders/css-loader']
            }
        ]
    },
    output:{
        filename:'[name].[hash:5].js',
    }
}