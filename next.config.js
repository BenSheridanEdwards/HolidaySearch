// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['secretescapes-web.imgix.net'],
  },
};
