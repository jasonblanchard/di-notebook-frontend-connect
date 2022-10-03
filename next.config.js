/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // basePath: '/Users/jason/projects/di-notebook-frontend-connect/out',
  assetPrefix: process.env.ASSET_PREFIX,

  async rewrites() {
    const upstreamHost =
      process.env.UPSTREAM_HOST === ""
        ? "localhost:8080"
        : process.env.UPSTREAM_HOST;

    return [
      {
        source: "/notebook.v1.NotebookService/:path*",
        destination: `${upstreamHost}/notebook.v1.NotebookService/:path*`,
      },
    ];
  },

  trailingSlash: process.env.TRAILING_SLASH === "true",
};

module.exports = nextConfig;
