const path = require('path');
let ROOT = process.env.PWD;

if (!ROOT) {
    ROOT = process.cwd();
}

const config = {

    port: 9000,
    dev_host: 'localhost',
    // Advanced configuration, edit with caution!
    env: process.env.NODE_ENV,
    root: ROOT,
    paths: {
        config: 'config',
        src: 'src',
        dist: 'dist',
    },
    devServer: {
        contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'assets')],
        compress: true,
        port: 9000
    }
};

module.exports = config;