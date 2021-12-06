module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/ignore': ['node_modules'],
    'import/extensions': ['.js', '.ts', '.tsx'],
    node: {
      resolvePaths: ['node_modules/@types'],
      tryExtensions: ['.js', '.json', '.ts', '.d.ts']
    }
  },
  rules: {
    'node/no-unsupported-features/es-syntax': ['error', {ignores: ['modules']}],
    'promise/no-native': 'off',
    'promise/no-callback-in-promise': 'off'
  }
};
