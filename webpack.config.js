const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        src:'./client/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s?ss/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin( {
            title: 'Development',
            template: './client/index.html'
        })
    ],
    devServer: {
        static: {
            publicPath: '/',
            directory: path.resolve(__dirname, 'dist'),
        },
        // enable HMR on the devServer
        // hot: true,
        // // fallback to root for other urls
        // historyApiFallback: true,
        // headers: { 'Access-Control-Allow-Origin': '*' },
        /**
         * proxy is required in order to make api calls to
         * express server while using hot-reload webpack server
         * routes api fetch requests from localhost:8080/api/* (webpack dev server)
         * to localhost:3000/api/* (where our Express server is running)
         */
        proxy: {
            'api/':'http://localhost:3000/'
            // '/api/**': {
            //     target: 'http://localhost:3000/',
            //     secure: false,
            // },
            // '/assets/**': {
            //     target: 'http://localhost:3000/',
            //     secure: false,
            // },
        },
    },
    resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: ['.js', '.jsx'],
      },
};