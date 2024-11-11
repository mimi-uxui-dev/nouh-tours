import config from "./config.js"; // Import the entire module

const { DB_URI, API } = config; // Destructure to get DB_URI

const nextConfig = {
  env: {
    DB_URI,
    API,
  },
};

export default nextConfig;
