/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                "hostname": "theordinary.com",
            },
            {
                "hostname": "www.raazain.com",
            },
            {
                "hostname": "cdn.sanity.io",
            }
        ]
    }
};

export default nextConfig;
