module.exports = {
  extends: '@mate-academy/eslint-config',

  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
};
