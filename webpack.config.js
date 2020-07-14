let base = require('./webpack.base');
let dev = require('./webpack.dev');
let prod = require('./webpack.prod');

module.exports = function (env) {
    if(env && env.prod){
        // 生产环境
        let setObj = {...base,...prod,};
        setObj.plugins = [...base.plugins,...prod.plugins]
        return setObj;
    } else {
        // 开发环境
        return {
            ...base,
            ...dev,
        }
    }
}