/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    {
      env: {
        commonjs: true,
        es2020: true
      },
      files: [
        '.eslintrc.js',
        'commitlint.config.js',
        'lint-staged.config.js',
        'next.config.js',
        'postcss.config.js',
        'prettier.config.js',
        'prisma/seed.js',
        'tailwind.config.js'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  root: true,
  rules: {
    '@next/next/no-page-custom-font': 'off'
  }
}
