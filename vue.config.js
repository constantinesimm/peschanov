const { join } = require('path');

module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        disableHostCheck: true
    },
    chainWebpack(config) {
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');

        config
            .plugin('html')
            .tap(args => {
                args[0] = {
                    template: join(__dirname, './public/index.html'),
                    minify: {
                        removeComments: true,
                        collapseWhitespace: false,
                        removeAttributeQuotes: false
                    }
                };

                return args;
            })
    }
};