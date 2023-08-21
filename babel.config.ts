module.exports = {
  plugins: ["syntax-dynamic-import", "transform-runtime"],
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
    "@babel/preset-react",
    "@babel/preset-stage-0",
  ],
  env: {
    start: {
      presets: ["react-hmre"],
    },
    test: {
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-stage-0",
      ],
    },
  },
};
