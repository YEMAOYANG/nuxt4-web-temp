// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // 自定义配置
  {
    files: ['**/*.vue', '**/*.ts', '**/*.tsx', '**/*.js', '**/*.mjs'],
    rules: {
      // Vue 最佳实践
      'vue/multi-word-component-names': 'off', // 允许单词组件名（app.vue等）
      'vue/no-v-html': 'warn', // 警告使用 v-html（防止 XSS）
      'vue/require-default-prop': 'warn', // 建议为 props 提供默认值
      'vue/require-prop-types': 'error', // props 必须定义类型
      'vue/component-name-in-template-casing': ['error', 'PascalCase'], // 组件名使用 PascalCase
      'vue/custom-event-name-casing': ['error', 'camelCase'], // 自定义事件使用 camelCase
      'vue/define-macros-order': ['error', {
        order: ['defineProps', 'defineEmits']
      }],
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        }
      }],
      'vue/padding-line-between-blocks': 'error', // 块之间要有空行

      // TypeScript 规则
      '@typescript-eslint/no-explicit-any': 'warn', // 警告使用 any
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }], // 未使用的变量（下划线开头的除外）

      // 通用最佳实践
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境警告 console
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境禁止 debugger
      'prefer-const': 'error', // 优先使用 const
      'no-var': 'error', // 禁止使用 var
      'object-shorthand': 'error', // 对象简写
      'prefer-template': 'error', // 优先使用模板字符串
      'prefer-arrow-callback': 'error', // 优先使用箭头函数作为回调
      'arrow-body-style': ['error', 'as-needed'], // 箭头函数体简写
      'no-duplicate-imports': 'error', // 禁止重复导入

      // 代码质量
      'eqeqeq': ['error', 'always', { null: 'ignore' }], // 始终使用 === 和 !==
      'curly': ['error', 'all'], // 始终使用大括号
      'no-throw-literal': 'error', // 不要抛出字面量
      'no-return-await': 'error', // 避免不必要的 return await
      'require-await': 'error', // async 函数必须有 await

      // 可访问性 (a11y) - 对官网很重要
      'vue/no-static-inline-styles': 'warn' // 避免静态内联样式
    }
  },
  // 特定文件的配置
  {
    files: ['*.config.{js,ts,mjs}', 'app.config.{js,ts,mjs}'],
    rules: {
      'no-console': 'off' // 配置文件中允许 console
    }
  },
  {
    files: ['pages/**/*.vue', 'layouts/**/*.vue', 'app.vue', 'error.vue'],
    rules: {
      'vue/multi-word-component-names': 'off' // 页面和布局文件允许单词名称
    }
  }
)
  // 可以链式调用进行更多自定义
  .override('nuxt/typescript/rules', {
    rules: {
      // 覆盖 TypeScript 特定规则
      '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-ignore': 'allow-with-description'
      }]
    }
  })
