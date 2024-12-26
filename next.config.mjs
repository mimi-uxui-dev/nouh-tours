// import config from "./config.js";

// const { DB_URI, API, NEXTAUTH_SECRET } = config;

// const nextConfig = {};
const nextConfig = {
  env: {
    DB_URI: process.env.DB_URI,
    API: process.env.API,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};

export default nextConfig;
