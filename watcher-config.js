var path = require('path');
var Config = {
    //监听的目录列表
    dirs : [
        {
            dir : path.resolve(__dirname,'js')
        },
        {
            dir : path.resolve(__dirname,'html-tpl'),
        }
    ],
    regex : /\.js$|\.css$|\.ejs$|\.html$/g,
    cmd : 'npm run build-dev'
};
module.exports = Config;