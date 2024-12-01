/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // adicione aqui os domínios das imagens externas se necessário
  },
  output: 'standalone', // isso pode ajudar com o deploy na Vercel
};

module.exports = nextConfig;
