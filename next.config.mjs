import config from "./config.js"; // Import the entire module
const { DB_URI } = config; // Destructure to get DB_URI

const nextConfig = {
  env: {
    DB_URI,
  },
};

export default nextConfig;
