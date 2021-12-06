module.exports = {
  exit: true,
  recursive: true,
  extensions: ['ts'],
  watchFiles: ["**/*.ts"],
  require: [
    'ts-node/register',
    'source-map-support/register'
  ],
  spec: ['test/*.spec.ts'],
  parallel: true
};
