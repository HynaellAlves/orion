import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Confugurações do Next.js */
  reactCompiler: true,
  /* Configurando provedores de Imagens */
  // ----- Adicionar o Prismic como provedor de imagens -----
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.prismic.io' },
      { protocol: 'https', hostname: 'prismic.io' },
    ]
  },
};

export default nextConfig;
