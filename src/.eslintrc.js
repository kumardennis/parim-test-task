module.exports = {
  extends: [
    'standard',
    'standard-react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: ['prettier'],
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'never'],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
    react: {
      pragma: 'React',
      version: '16.8.4',
    },
  },
};
