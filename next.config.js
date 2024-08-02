/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'bafybeifgvjz7fx7q7ubbbos32ffliiu7c7lsykcsdkvcmitjfkt3gksvge.ipfs.dweb.link',
      'chocolate-legislative-lamprey-152.mypinata.cloud', // Agrega el nuevo dominio aquí
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
