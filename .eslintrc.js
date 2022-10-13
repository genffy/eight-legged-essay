module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': ['off'],
    'no-plusplus': ['off'],
    'no-bitwise': ['off'],
    'class-methods-use-this': ['error', { enforceForClassFields: false }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'never',
      functions: 'never',
    }],
  },
};
