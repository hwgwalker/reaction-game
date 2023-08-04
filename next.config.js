/** @type {import('next').NextConfig} */
const path = require("node:path");


const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  sassOptions: {
    prependData: `
      @import "/src/scss/variables";
      @import "/src/scss/mixins";
    `,
    sourceMap: true,
    includePaths: [
      path.join(__dirname, "/components/styles"),
      path.join(__dirname, "/components/styles/Base"),
      path.join(__dirname, "/components/styles/Global"),
      path.join(__dirname, "/src/styles"),
      path.join(__dirname, "styles"),
    ],
  },
  webpack(config) {
    (config.resolve.alias = {
      ...config.resolve.alias,
      "~styles": path.resolve(__dirname, "src/styles"),
    }),
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    return config;
  },
};

module.exports = nextConfig;
