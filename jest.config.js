module.exports = {
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["./setupTest.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
};
