module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'react-hooks', 'react-native', 'prettier'],
  env: {
    es2021: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        trailingComma: 'all',
        arrowParen: 'always',
      },
    ],
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'warn',
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'off',
    'react/prefer-stateless-function': [
      'off',
      {
        ignorePureComponents: true,
      },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/html-has-lang': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-single-element-style-arrays': 'warn',
    'react-native/no-unused-styles': 'warn',
    'arrow-parens': 'off',
    'camelcase': 'off',
    'consistent-return': 'off',
    'global-require': 'off',
    'new-cap': 'off',
    'no-case-declarations': 'off',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-continue': 'error',
    'no-debugger': 'error',
    'no-extra-boolean-cast': 'off',
    'no-fallthrough': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'no-useless-escape': 'off',
    'prefer-destructuring': 'off',
  },
};
