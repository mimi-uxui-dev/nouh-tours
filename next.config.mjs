const nextConfig = {
  env: {
    DB_URI: process.env.DB_URI,
    API: process.env.API,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    SECRET: process.env.SECRET,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "nouhtours.com", // Match non-www domain
          },
        ],
        destination: "https://www.nouhtours.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
