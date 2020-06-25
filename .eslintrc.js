module.exports = {
  root: true,

  env: {
    node: true,
  },

  globals: {
    TNS_ENV: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
  },

  plugins: [
    '@typescript-eslint',
  ],

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],

  extends: [
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',
    '@vue/typescript',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: 'off',
    'max-len': ['error', { code: 120 }],
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'class-methods-use-this': ['off'],
    'import/no-extraneous-dependencies': ['error', {
      'packageDir': './'
    }],
  },
};
