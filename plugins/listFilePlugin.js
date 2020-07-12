module.exports = class ListFilePlugin {

    constructor(filename = 'listFilePlugin.md') {
        this.filename = filename;
    }
    apply(compiler) {
        compiler.hooks.emit.tap('listFilePlugin', compilation => {

            // 读取资源列表里的文件名和尺寸
            let arr = [];
            for (const key in compilation.assets) {
                let info = `【${key}】\n文件大小为${compilation.assets[key].size() / 1000}kb\n\n`;
                arr.push(info);
            }
            // 添加文件到资源列表
            const str = arr.join('');
            compilation.assets[this.filename] = {     // 必须要箭头函数，this指箭头函数外面的环境 不然拿不到name
                source() {
                    return str
                },
                size() {
                    return str.length;
                }
            }
        })
    }
}