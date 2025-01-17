/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  rootDir: './',
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};