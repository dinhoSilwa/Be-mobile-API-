import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginImport from "eslint-plugin-import"

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { import: eslintPluginImport },
    rules: {
      // Regras de estilo de código
      //'no-console': ['error'],  // Garante que o uso de console resulte em erro
      'no-unused-vars': 'warn', // Gera um aviso se houver variáveis não utilizadas
      '@typescript-eslint/no-explicit-any': 'warn'  // Gera um aviso ao usar o tipo `any`
    }
  }
]
