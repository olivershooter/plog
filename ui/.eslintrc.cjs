module.exports = {
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'eslint-config-prettier',
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      node: {
        paths: ['ui/src', 'src', 'ui'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // Enforces am import order
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@mui/icons-material/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@mui/material/**',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // Rule to enforce using stateless functional components whenever possible for improved performance
    'react/prefer-stateless-function': 'error',

    // Rule to enforce using PascalCase for React components
    'react/jsx-pascal-case': 'error',

    // Rule to disallow using 'javascript:' URLs in JSX
    'react/jsx-no-script-url': 'error',

    // Rule to disallow passing children as props to components which are not meant to handle them
    'react/no-children-prop': 'error',

    // Rule to disallow using dangerouslySetInnerHTML prop
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',

    // Rule to enforce using fragments instead of unnecessary div wrappers
    'react/jsx-fragments': 'error',

    // Rule to enforce using destructuring assignment in function parameters and signatures
    'react/destructuring-assignment': [
      'error',
      'always',
      { destructureInSignature: 'always' },
    ],

    // Rule to prevent leaked renders in JSX
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],

    // Rule to limit the maximum depth of JSX nesting
    'react/jsx-max-depth': ['error', { max: 5 }],

    // Rule to enforce using arrow function syntax for defining function components
    'react/function-component-definition': [
      'warn',
      { namedComponents: 'arrow-function' },
    ],

    // Rule to enforce providing keys for elements in arrays or iterators in JSX
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],

    // Rule to warn against using unnecessary empty fragments
    'react/jsx-no-useless-fragment': 'warn',

    // Rule to warn against missing curly braces in JSX attributes when needed
    'react/jsx-curly-brace-presence': 'warn',

    // Rule to warn against common typos in JSX component names
    'react/no-typos': 'warn',

    // Rule to warn if a component does not have a displayName defined
    'react/display-name': 'warn',

    // Rule to warn against not using self-closing tags for components without children
    'react/self-closing-comp': 'warn',

    // Rule to warn against not sorting props alphabetically in JSX
    'react/jsx-sort-props': 'warn',

    // Rule to disable requiring React import in JSX files (assuming it's already done globally)
    'react/react-in-jsx-scope': 'off',

    // Rule to disable enforcing one expression per line in JSX
    'react/jsx-one-expression-per-line': 'off',

    // Rule to disable prop-types validation (useful for projects utilizing TypeScript or other type-checking solutions)
    'react/prop-types': 'off',

    // Typescript covers this
    'no-undef': 'off',
  },
}
