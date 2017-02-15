/**
 * workflow main script and detail
 * Created by cluo on 2017/2/14.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const host = 'http://192.168.1.1';

module.exports = {
    // click on the name of the option to get to the detailed documentation
    // click on the items with arrows to show more examples / advanced options

    entry: {
        pageA: path.resolve(__dirname, 'js/pageA.js'),
        pageB: path.resolve(__dirname, 'js/pageB.js')
    }, // string | object | array

    output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, "assets/js/"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "[name].js", // string
        // the filename template for entry chunks
        publicPath: "/assets/", // string
        // the url to the output directory resolved relative to the HTML page
        libraryTarget: "umd", // universal module definition
        // the type of the exported library
        /* Advanced output configuration (click to show) */
    },
    module: {
        // configuration regarding modules
        rules: [
            {
                test: /js[\\|\/].+\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    //plugins: ['transform-runtime']
                }
            }
        ]
    },
    resolve: {
        // options for resolving module requests
        // (does not apply to resolving to loaders)

        modules: [
            "node_modules"
        ],
        // directories where to look for modules

        extensions: [".js", ".json", ".jsx", ".css"],
        // extensions that are used

        alias: {

            "moduleA": path.resolve(__dirname, "js/components/modA.js"),
            "moduleB": path.resolve(__dirname, "js/components/modB.js"),
            // alias "module" -> "./app/third/module.js" and "module/file" results in error
            // modules aliases are imported relative to the current context
        }
    },

    devtool: "source-map", // enum
    // enhance debugging by adding meta info for the browser devtools
    // source-map most detailed at the expense of build speed.

    context: __dirname, // string (absolute path!)
    // the home directory for webpack
    // the entry and module.rules.loader option
    //   is resolved relative to this directory

    target: "web", // enum
    // the environment in which the bundle should run
    // changes chunk loading behavior and available modules

    plugins: [
        //对html模板进行编译
        new HtmlWebpackPlugin({
            title: '测试',
            //外部域名，用以支持CDN资源加载的场景
            host: host,
            filename: path.resolve(__dirname,'html/index.html'),
            template: path.resolve(__dirname,'html-tpl/index.ejs'),
            //只加载指定的js文件列表
            chunks: ['pageA']
        })
    ]
    // list of additional plugins
}