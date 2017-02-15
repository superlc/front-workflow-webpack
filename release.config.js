/**
 * workflow main script and detail
 * Created by cluo on 2017/2/14.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    // click on the name of the option to get to the detailed documentation
    // click on the items with arrows to show more examples / advanced options

    entry: {
        pageA: path.resolve(__dirname, 'js/pageA.js'),
        pageB: path.resolve(__dirname, 'js/pageB.js')
    }, // string | object | array

    output: {
        // options related to how webpack emits results

        path: path.resolve(__dirname, "dist"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)

        filename: "[name].js", // string
        // the filename template for entry chunks

        publicPath: "/assets/", // string
        // the url to the output directory resolved relative to the HTML page

        library: "MyLibrary", // string,
        // the name of the exported library

        libraryTarget: "umd", // universal module definition
        // the type of the exported library

        /* Advanced output configuration (click to show) */
    },

    module: {
        // configuration regarding modules

        rules: [

            {
                test: "\.html$",

                use: [
                    // apply multiple loaders and options
                    "htmllint-loader",
                    {
                        loader: "html-loader",
                        options: {
                            /* ... */
                        }
                    }
                ]
            },
            {
                test: /js[\\|\/].+\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    //plugins: ['transform-runtime']
                }
            }
        ],

        /* Advanced module configuration (click to show) */
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

    performance: {
        hints: "warning", // enum
        maxAssetSize: 200000, // int (in bytes),
        maxEntrypointSize: 400000, // int (in bytes)
        assetFilter: function(assetFilename) {
            // Function predicate that provides asset filenames
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
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

    devServer: {
        /* TODO */
    },

    plugins: [
        //压缩js文件
        new webpack.optimize.UglifyJsPlugin()
    ],
    // list of additional plugins


    /* Advanced configuration (click to show) */
}