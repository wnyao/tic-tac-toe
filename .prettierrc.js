module.exports = {
  trailingComma: 'none',
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  overrides: [
    {
      files: ['*.html'],
      options: {
        printWidth: 999
      }
    }
  ]
};
