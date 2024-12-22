const config = require("./config.js");

const { DB_URI, API, NEXTAUTH_SECRET } = config;

const nextConfig = {
  env: {
    DB_URI,
    API,
    NEXTAUTH_SECRET,
  },
};

module.exports = nextConfig;
