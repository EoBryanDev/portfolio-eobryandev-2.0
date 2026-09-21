import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.0.0.122'],
  // Self-host (K8s): gera .next/standalone com server.js + deps mínimas.
  // Vercel ignora este campo (usa o próprio runtime), então o deploy atual
  // continua intacto.
  output: 'standalone',
};

export default nextConfig;
