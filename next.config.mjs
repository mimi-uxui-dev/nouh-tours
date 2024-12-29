const nextConfig = {
  env: {
    DB_URI: process.env.DB_URI,
    API: process.env.API,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    SECRET: process.env.SECRET,
  },
};

export default nextConfig;
