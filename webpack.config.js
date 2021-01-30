const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
    mode: 'development',
    entry: ['./src/assets/styles/style.scss', './src/main.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/i,
                use: 'vue-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            generator: (content) => svgToMiniDataURI(content.toString()),
                        },
                    },
                ],
            }
        ]
    },
    devServer: {
        stats: 'errors-only'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new VueLoaderPlugin()
    ]
}