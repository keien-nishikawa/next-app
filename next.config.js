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
  swcMinify: true, // FYI: https://nextjs.org/docs/advanced-features/compiler#minification
  compiler: {
    // FYI: https://nextjs.org/docs/advanced-features/compiler#remove-console
    removeConsole: true,
  },
};
