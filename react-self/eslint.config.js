// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  [
    // 전역 ignore
    {
      ignores: ['dist'],
    },

    // TypeScript + React ESLint + Prettier 통합    
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        js.configs.recommended,               // JS 추천 규칙
        ...tseslint.configs.recommended,      // TypeScript 추천 규칙
        reactHooks.configs['recommended-latest'], // React Hooks 최신 규칙
        reactRefresh.configs.vite,            // Vite 환경용 React Refresh
        prettierConfig,                       // Prettier와 충돌하는 ESLint 규칙 끔
      ],
      plugins: {
        prettier, // Prettier 플러그인 등록
      },
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      rules: {
        'prettier/prettier': 'error', // Prettier 규칙 위반 시 ESLint 에러 처리
      },
    },
  ]
);
