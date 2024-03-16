/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                "hostname": "theordinary.com",
            },
            {
                "hostname": "www.raazain.com",
            }
        ]
    }
};

export default nextConfig;
