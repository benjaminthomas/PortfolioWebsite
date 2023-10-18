/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'picsum.photos'
            }
        ]
    },

    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
