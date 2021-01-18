var path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        index: './src/js/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html',
            // minify: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ],
    devServer: {
        contentBase:'./src',//指定打开的入口
        open: true
    },
    module: { // 用来配置第三方loader模块的
        rules: [ // 文件的匹配规则
            //处理css文件的规则
            { test: /\.css$/, 
                // use: ['style-loader', 'css-loader'] 
                // use: [MiniCssExtractPlugin.loader, "css-loader"]
                use: [{
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        publicPath:'../'
                    }
                }, "css-loader"]
            },
                //处理less文件的规则
            { test: /\.less$/,
                 use: ['style-loader', 'css-loader', 'less-loader'] },
                 // 处理url 路径的文件规则
            { test: /\.(png|jpg|gif)$/,
                 use: 'url-loader?limit=3000&outputPath=images&name=[hash:8]-[name].[ext]' },
            /*
            limit ：指定大小
            hash:添加hash值，防止重名
            name:原名显示
            ext:原后缀
            */
           { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
           // 设置
           {
            test: /\.(htm|html)$/,
             use:'html-loader'
          },
    
        ]
    }
}