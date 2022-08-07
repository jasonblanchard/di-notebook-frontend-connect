/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
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