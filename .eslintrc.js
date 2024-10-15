module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true
   },
   extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
   plugins: [
      'vue' // Asegúrate de incluir el plugin
   ],
   rules: {
      //'vue/name-property-casing': ['error', 'PascalCase'],
      'no-undef': 'error',
      'vue/multi-word-component-names': 'off'
   }
};
