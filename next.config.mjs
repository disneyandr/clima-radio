import dotenv from 'dotenv';
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLIENT_ID: '88fbe445437b423fab1b937b6bf9ac53',
    CLIENT_SECRET: 'a4392c2b182b4ab1b106c3db6065852b',
    URL_TOKEN: 'https://accounts.spotify.com/api/token',
    URL_ARTISTS: 'https://api.spotify.com/v1/artists',
  },
  // other config options here
};

export default nextConfig;
