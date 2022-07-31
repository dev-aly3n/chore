module.exports = {
  options: {
    sourcemaps: "development", // possible values can be production, development, or none
  },
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  async redirects() {
    return [
     
    ];
  },
  
};
