module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  bracketSpacing: true,
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '~components/*',
    '~utils/*',
    '~hooks/*',
    '^[./]',
  ],
  jsxSingleQuote: true,
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
};
