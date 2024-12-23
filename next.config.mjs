import config from "./config.js";

const { DB_URI, API, NEXTAUTH_SECRET } = config; // Destructure to get DB_URI

const nextConfig = {
  output: "export",
  env: {
    DB_URI,
    API,
    NEXTAUTH_SECRET,
  },
};

export default nextConfig;
