const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
});
module.exports = withNextra({
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: "/react-verification-input",
});
