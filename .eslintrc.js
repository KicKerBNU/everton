module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
    'prettier/vue',
    'eslint:recommended'
  ],
  rules: {
    'vue/no-side-effects-in-computed-properties': 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],

    autofix: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: ['**/__test__/*.{j,t}s?(x)', '**/test/**/*.spec.{j,t}s?(x)'],
      env: {
        mocha: true
      },
      globals: {
        expect: false,
        moxios: false
      }
    }
  ],
  globals: {
    VERSION: 'readonly'
  }
};
