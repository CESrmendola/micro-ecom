const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8082/',
    },

devServer: {
    port:8082,
},

plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html'
    }),
],
};
