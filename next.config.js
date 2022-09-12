/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // basePath: '/Users/jason/projects/di-notebook-frontend-connect/out',
    assetPrefix: process.env.ASSET_PREFIX,
    
    async rewrites() {
        return [
            {
                source: '/notebook.v1.NotebookService/:path*',
                destination: 'http://localhost:8080/notebook.v1.NotebookService/:path*',
            }
        ]
    },
}

module.exports = nextConfig;