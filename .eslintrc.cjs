module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    babelOptions: {
      parserOpts: {
        plugins: ['typescript']
      }
    }
  },
  plugins: ['prettier'],
  ignorePatterns: ['**/public/**', '**/dist/**'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-fallthrough': 'off',
    'vue/this-in-template': ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    'vue/attributes-order': [
      'error',
      {
        order: ['CONDITIONALS', 'LIST_RENDERING', 'DEFINITION', ['UNIQUE', 'SLOT'], 'RENDER_MODIFIERS', 'GLOBAL', 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', ['OTHER_ATTR', 'EVENTS'], 'CONTENT'],
        alphabetical: false
      }
    ]
  }
};
