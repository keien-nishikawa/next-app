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
  // FYI: https://nextjs.org/docs/advanced-features/compiler#experimental-features
  experimental: {
    emotion: {
      sourceMap: true,
      autoLabel: 'always',
      labelFormat: 'next',
    },
  },
  // FYI: https://nextjs.org/docs/advanced-features/compiler#minification
  // swcMinifyしない方が、buildサイズが小さいかった、、、
  swcMinify: false,
  compiler: {
    // FYI: https://nextjs.org/docs/advanced-features/compiler#remove-console
    removeConsole: true,
  },
};
