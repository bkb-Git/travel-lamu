const withPluginAntdLess = require("next-plugin-antd-less");
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
// primary-color options : savannah #d1bd92

module.exports = withPluginAntdLess({
  modifyVars: { "@primary-color": "#ab966f", "@layout-header-background": "#000" },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
