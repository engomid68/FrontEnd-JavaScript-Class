const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/js/app.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            // {
            //     test: /\.(jpg|png)$/,
            //     use: {
            //         loader: 'url-loader',
            //     },
            // },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            // {
            //     test: /\.(gif|png|jpg|svg)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[hash].[ext]',
            //                 outputPath: 'assets'
            //             }
            //         }
            //     ]
            // },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
    ]
};