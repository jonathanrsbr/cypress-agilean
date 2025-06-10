// eslint.config.js
import eslintPluginCypress from 'eslint-plugin-cypress'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import prettierConfig from './.prettierrc' assert { type: 'json' }

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...eslintPluginCypress.environments.globals.globals,
      },
    },
    plugins: {
      cypress: eslintPluginCypress,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginCypress.configs.recommended.rules,
      'prettier/prettier': ['error', prettierConfig],
    },
    ignores: ['node_modules', 'cypress/videos', 'cypress/screenshots'],
  },
]
