module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],

    'import/order': [
      1,
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'components',
            group: 'internal',
          },
          {
            pattern: 'common',
            group: 'internal',
          },
          {
            pattern: 'routes/ **',
            group: 'internal',
          },
          {
            pattern: 'assets/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    'import/newline-after-import': ['error', { count: 1 }],

    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    // Exclude relative import paths
    'no-restricted-imports': ['error', { patterns: ['../*', './*/**', './*/*'] }],

    // Named exports are better
    'import/prefer-default-export': 'off',

    //Allow catches to be empty:
    'no-empty': ['error', { allowEmptyCatch: true }],

    // We like the ()=> style
    'react/function-component-definition': 'off',

    // Valid reasons for this (Redux etc.)
    'no-param-reassign': ['error', { props: false }],

    // Nested ternaries are fine
    'no-nested-ternary': 'off',
    'react/jsx-no-useless-fragment': 'off',

    // Styled components need this specifically
    '@typescript-eslint/no-unused-expressions': 'off',
  },
  overrides: [
    {
      files: ['*.test.{ts.tsx}'],
      rules: {
        // Allow prop spreading in tests
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-explict-any': 0,
      },
    },
  ],
};
