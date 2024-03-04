module.exports = {
  extends: ['@react-native-community', '@react-native', 'eslint:recommended'],
  plugins: ['import'],
  root: true,

  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    //===//
    quotes: ['error', 'single'],
    'prettier/prettier': ['error', {singleQuote: true}],

    //===//
    //https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      //Require blank lines before all return statements
      {blankLine: 'always', prev: '*', next: 'return'},
      //Require blank lines after every sequence of variable declarations
      {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      //Require blank lines before after function declarations
      {blankLine: 'always', prev: 'block-like', next: '*'},
    ],

    //===//
    //https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'always',
      },
    ],
  },
}
