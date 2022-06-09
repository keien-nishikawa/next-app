module.exports = {
  env: {
    APP_API_KEY: process.env.APP_API_KEY,
  },
  pageExtensions: ['page.tsx'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
