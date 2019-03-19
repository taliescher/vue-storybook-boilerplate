const path = require('path');

module.exports = async ({ config }) => {
    config.module.rules.push({
      test: /\.scss$/,
      loaders: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ],
      include: path.resolve(__dirname, "../src/stylesheet")
    });

    config.resolve.extensions.push(".scss");
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src/"),
      '~': path.resolve(__dirname, "../src/stylesheet/"),
      components: path.resolve(__dirname, '../src/components/'),
      stories: path.resolve(__dirname, '../src/stories/')
    };

    return config;
};