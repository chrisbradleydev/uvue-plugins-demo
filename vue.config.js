const path = require('path');

module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    },
    devServer: {
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || 3000,
    },
};
