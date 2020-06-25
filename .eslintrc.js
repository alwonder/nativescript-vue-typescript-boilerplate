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
    "eslint:recommended",
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
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'class-methods-use-this': ['off'],
    "no-global-assign": ["error", {"exceptions": ["JKHBH"]}]
  },
};
