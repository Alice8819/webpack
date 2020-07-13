var path = require('path');
module.exports = {
    entry:{
        main:'./index',
    },
    context:path.resolve(__dirname,'src'),
    output:{
        path:path.resolve(__dirname,'scripts'),
        filename:'[name]-[hash:5].js',
        library:'abc',
        // libraryTarget:'this',
    },
    target:'node',
    module:{
        rules:[],
        noParse:/a\.js$/,
    },
    resolve:{
        // modules:['dist']
        extensions:['.js'],
        alias:{
            '@':path.resolve(__dirname,'src')
        }
    },
    externals:{
        jquery:'$'
    },
    stats:{
        colors:true,
        modules:false,
        hash:false,
    }
}