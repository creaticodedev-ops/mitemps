const nextConfig = {
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/search", destination: "/catalogue", permanent: false },
      {
        source: "/search/:handle",
        destination: "/categories/:handle",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
