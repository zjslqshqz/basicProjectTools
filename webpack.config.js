const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development', // 进入指定模式
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '开发模式',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
            // filename: '[name].[hash].css'
        }),
    ],
    devtool: 'inline-source-map', // 生成 source-map 文件，方便错误提示
    devServer: {
        contentBase: './dist', // 通知 webpack-dev-server 站点根目录地址
    },
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    output: {
        filename: '[name].bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { // 处理css代码文件
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { // 独立成 单独css 文件
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                // publicPath 是资源相对于上下文的相对路径
                                // 例如：对于 ./css/admin/main.css publicPath 将会是 ../../
                                // 而对于 ./css/main.css publicPath 将会是 ../
                                return path.relative(path.dirname(resourcePath), context) + '/'; // 自动站点路径
                                // return '../dist/' // 手动指定文件夹路径
                            },
                        }
                    },
                    'css-loader', // 获取 css 代码
                    'sass-loader', //scss 编译出 css
                ],
            },
            { // 处理图片
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            { // 处理字体
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]
    },
    optimization: {
        moduleIds: 'deterministic', // 用于固定在内容不变情况下，保持moduleId，进而保证哈内容希值不变,用与缓存保证
        runtimeChunk: 'single',//防止多入口出错
        splitChunks: { // 批量分离符合规则的文件模块
            cacheGroups: { // 分组
                vendor: {
                    test: /[\\/]node_modules[\\/]/, // 正则路径
                    name: 'node_modules',
                    chunks: 'all',
                },
            },
        }
    }
};