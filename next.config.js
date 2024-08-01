/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // Si utilizas imágenes locales, esta configuración es suficiente.
      // Puedes agregar más configuraciones si las necesitas.
      domains: ['bafybeifgvjz7fx7q7ubbbos32ffliiu7c7lsykcsdkvcmitjfkt3gksvge.ipfs.dweb.link'], // Reemplaza con dominios permitidos si usas imágenes externas
    },
    reactStrictMode: true, // Esto es opcional, pero recomendado para detectar problemas en desarrollo
  };
  
  module.exports = nextConfig;
  