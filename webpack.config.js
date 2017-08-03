const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: __dirname + '/src/js/index.js',
    output: {
        path: __dirname,
        filename: '[name]-[chunkhash].js'
    },
    module: {
        rules: [{
            //将css文件单独拆分出。
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function() {
                            return [
                                require('autoprefixer')({ //给css属性自动添加前缀，兼容不同浏览器
                                    browers: ['last 5 versions'] //最新的五个浏览器版本
                                })
                            ]
                        }
                    }
                }, 'less-loader']
            })

        }, {
            //将ES6转成ES5
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
            exclude: /(node_modules|bower_components)/ //排除第三方库中的js文件
        }, {
            test: /\.(png|jpg|gif|ico)$/,
            use: 'url-loader?limit=4096&name=./static/img/[hash].[ext]'
        }, {
            test: /\.(svg|woff|eot|ttf)\??.*$/,
            use: 'url-loader?limit=4096&name=./static/fonts/[name].[md5:hash:hex:7].[ext]'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ //生成主页
            title: '彭双的个人主页',
            template: __dirname + '/src/template.html',
            filename: 'index.html',
            inject: 'body',
            modifyDate: new Date(),
            minify: {
                removeComment: false
            }
        }),
        new ExtractTextPlugin('[name]-[contenthash].css'),//拆分出的css文件，参数是名字
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    externals: {
        jquery: 'jQuery'
    },
    watch: true
}