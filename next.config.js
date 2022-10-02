/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // basePath: '/Users/jason/projects/di-notebook-frontend-connect/out',
  assetPrefix: process.env.ASSET_PREFIX,

  async rewrites() {
    return [
      {
        source: "/notebook.v1.NotebookService/:path*",
        destination:
          "https://jasonblanchard-di-notebook-connect-wrxq4qx99qf5r49-8080.githubpreview.dev/notebook.v1.NotebookService/:path*",
      },
    ];
  },

  trailingSlash: process.env.TRAILING_SLASH === "true",
};

module.exports = nextConfig;
