module.exports = {
  extensionsToTreatAsEsm: [".js", ".jsx", ".ts", ".tsx"],

  transform: {
    "\\.(js|jsx|mjs|cjs|ts|tsx)$": "babel-jest",
  },

  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};
