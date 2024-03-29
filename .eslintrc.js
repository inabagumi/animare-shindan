/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    es2020: true
  },
  extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      files: ['**/*.ts?(x)'],
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    {
      env: {
        commonjs: true
      },
      files: ['.*rc.js', '*.config.js'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  root: true,
  rules: {
    '@next/next/no-page-custom-font': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc'
        },
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          ['index', 'sibling'],
          'unknown',
          'type'
        ],
        'newlines-between': 'always'
      }
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true
      }
    ],
    'sort-keys': [
      'error',
      'asc',
      {
        natural: true
      }
    ],
    'sort-vars': 'error'
  }
}
