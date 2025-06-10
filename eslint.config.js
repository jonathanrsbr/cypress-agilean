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

