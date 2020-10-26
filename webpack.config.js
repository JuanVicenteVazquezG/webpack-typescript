const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [new HTMLWebpackPlugin({
        title: 'Webpack  step by step and Typescript',
        template: `${path.resolve(__dirname, 'src')}/index.html`
    })
    ]
};
