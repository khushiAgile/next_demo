/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_BASE: 'https://node-product-distribution-backend.agiletechnologies.in',
        NEXT_PUBLIC_APP_NAME: 'ProductDistibution_',
        NEXT_PUBLIC_IMAGE_BASE: 'https://node-product-distribution-backend.agiletechnologies.in/uploads/product/',
        NEXT_PUBLIC_NEXTAUTH_SECRET: 'SeGa1bKeqqUVArdcIzwoyC1n1KPXIj03ppxW0vQjIyo=',
        NEXT_PUBLIC_GITHUB_SECRET: 'c7dac89a200fb68f2e77e4f2f12917de8c939b8b',
        NEXT_PUBLIC_GITHUB_ID: '697af52a2a31683443fe',
    },
    images: {
        domains: [
            'node-product-distribution-backend.agiletechnologies.in'
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'node-product-distribution-backend.agiletechnologies.in',
                port: '',
                pathname: '/uploads/product/'
            }
        ],
    },
    experimental: {
        serverActions: true
    },
}

module.exports = nextConfig
