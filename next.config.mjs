import million from "million/compiler";
/** @type {import('next').NextConfig} */
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['vc.colraices.com', 'blog.colraices.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vc.colraices.com',
        port: '',
        pathname: '/storage/properties/**',
      },
    ],
  },
}


export default million.next(nextConfig);
