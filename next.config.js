/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  assetPrefix: process.env.ASSET_PREFIX,

  async rewrites() {
    const upstreamHost =
      process.env.UPSTREAM_HOST === undefined ? "" : process.env.UPSTREAM_HOST;

    return [
      {
        source: "/notebook.v1.NotebookService/:path*",
        destination: `${upstreamHost}/notebook.v1.NotebookService/:path*`,
      },
    ];
  },

  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
