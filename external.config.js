global.oversea = process.env.oversea ? process.env.oversea : 0;  //可耻的用一下global
var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('css/[name].css?[chunkhash]');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var publicPath = '/';  // 发布路径，这里不用绝对路径的话css引用的图片最终路径会不对，生成的是url(css/imm/xx.png)
var lanPath = path.resolve(process.cwd(), 'src/js/repertory/common/language/');
var language = process.env.language ? process.env.language : (oversea ? 'en_US' : 'zh_CN');
var lanPack = require(lanPath + '/' + language + '.js');

var plugins = [
    extractCSS,
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false,
        },
        compress: {
            warnings: false
        }
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        }
    }),
    new CopyWebpackPlugin([
        { from: 'external/common/', to: 'js/external' },
        { from: 'src/js/external', to: 'js/external' },
        { from: 'external/font/', to: 'font/' },
        { from: 'external/css/', to: 'css/' },
        { from: 'src/images/', to: 'images/' },
        { from: 'src/js/repertory/common/language/', to: 'js/language' }
    ])
];

glob.sync('./external/*.html').forEach(function(filePath){
    var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    var htmlPlugin = {
        filename:path.resolve(__dirname,"assets") + '/'+ filename +'.html',    //生成的html存放路径，相对于 path
        template:filePath,    //html模板路径
        inject:'body',
        showError:true,
        hash:true,
        // minify:true,
        oversea:oversea,
        chunks : [filename]
    };
    htmlPlugin = Object.assign({},lanPack,htmlPlugin);
    plugins.push(new HtmlWebpackPlugin(htmlPlugin));
});

var entries = (function(){
    var entryFiles = glob.sync('./external/entry/*.js')
    var map = {}

    entryFiles.forEach((filePath) => {
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        map[filename] = filePath
    })
    return map;
})();

module.exports = {
    //入口
    entry: entries,
    //格式
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss', '.png', '.jpg', '.woff', 'eot', 'ttf']
    },
    //出口
    output: {
        path: path.resolve(__dirname, "assets"),
        filename: 'js/[name].js?[hash]',
        publicPath: publicPath,
        libraryTarget: "umd"
    },
    //处理
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }, {
                test: /\.(woff|eot|ttf)$/,
                loader: 'file?name=font/[name].[ext]'
            }, {
                test: /\.css$/i,
                loader: extractCSS.extract(['css'])
            }, {
                test: /\.(svg|jpe?g|png|gif|ico)$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=images/[name].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            }
        ]
    },
    plugins: plugins,

    externals:{
        jquery: "jQuery"
    }
};
