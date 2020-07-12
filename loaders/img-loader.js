var loaderUtils = require('loader-utils');

function loader (buffer) {
    const option = loaderUtils.getOptions(this);
    let content;
    if(buffer.byteLength >= option.limit){
        content = getPicFile.call(this,option.name,buffer);
    } else {
        content = getBase64(buffer);
    }

    return `
    module.exports = \`${content}\`
    `
}

loader.raw = true;

function getBase64 (buffer) {
    return 'data:image/png;base64,' + buffer.toString('base64');
}

function getPicFile (name,buffer) {
    const fileName = loaderUtils.interpolateName(this,name,{
        content:buffer,
    })
    this.emitFile(fileName,buffer); // 往总资源里添加文件

    return fileName;
}

module.exports = loader;