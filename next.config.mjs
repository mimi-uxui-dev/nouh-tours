import config from "./config.js"; // Import the entire module

const { DB_URI, API, NEXTAUTH_SECRET } = config; // Destructure to get DB_URI

const nextConfig = {
  env: {
    DB_URI,
    API,
    NEXTAUTH_SECRET,
  },
};

export default nextConfig;
