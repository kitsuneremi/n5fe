/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'static.nike.com',
                protocol: 'https'
            }
        ]
    }
}

module.exports = nextConfig
