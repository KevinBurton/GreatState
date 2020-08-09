module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest.preprocess.js"
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  "collectCoverageFrom": [
    "src/*.jsx",
    "src/*.ts",
    "src/*.tsx",
    "src/store/*.ts",
    "src/components/*.js",
    "src/components/*.jsx",
    "src/components/*.ts",
    "src/components/*.tsx",
    "src/pages/*.js",
    "src/pages/*.jsx",
    "src/pages/*.ts",
    "src/pages/*.tsx",
  ],
  "coveragePathIgnorePatterns": [
    "<rootDir>/src/components/seo.js",
    "<rootDir>/src/components/image.js",
    "<rootDir>/src/components/header.js",
    "<rootDir>/src/image.d.ts"
  ],
  "coverageThreshold": {
    "global": {
      "statements": 74,
      "branches": 91,
      "functions": 56,
      "lines": 73
    }
  }
}