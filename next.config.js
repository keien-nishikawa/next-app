module.exports = {
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
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
  // compiler: {
  // FYI: https://nextjs.org/docs/advanced-features/compiler#remove-console
  // removeConsole: false,
  // },
  // FYI: https://nextjs.org/docs/advanced-features/compiler#minification
  // swcMinifyしない方が、buildサイズが小さいかった、、、
  // 「https://pagespeed.web.dev」で計測するとfalseの方がパフォーマンスがいい
  // build速度的はtrueの方が早い
  swcMinify: false,
};
