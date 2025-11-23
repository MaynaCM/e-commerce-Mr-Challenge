export default {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"]
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
