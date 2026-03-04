// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 站点配置（用于 sitemap 和 SEO）

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-svgo',
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      { code: 'zh-CN', name: '中文', file: 'zh-CN.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'zh-CN',
    strategy: 'no_prefix'
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://wwww.abc.com',
    name: 'ABC'
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: false
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/css/variables.scss" as *;
            @use "@/assets/css/mixins.scss" as *;
          `
        }
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        // 代码风格配置 - 适合团队协作
        indent: 2, // 使用2个空格缩进
        quotes: 'single', // 使用单引号
        semi: false, // 不使用分号
        commaDangle: 'never', // 不使用尾随逗号
        braceStyle: '1tbs', // 大括号风格
        arrowParens: true // 箭头函数参数总是使用括号
      }
    }
  },

  image: {
    // 图片格式优化（生产环境）
    format: ['webp', 'jpg', 'png'],
    quality: 80,
    // 响应式断点
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    // 预设配置
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 200,
          height: 200,
          quality: 85
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          quality: 80,
          fit: 'cover'
        }
      },
      icon: {
        modifiers: {
          format: 'webp',
          width: 80,
          height: 80,
          quality: 85
        }
      },
      banner: {
        modifiers: {
          format: 'webp',
          quality: 75,
          fit: 'cover'
        }
      }
    },
    // 关键配置：指定图片源目录 - Nuxt 4 格式
    dir: 'assets/images',
    // IPX配置（内置优化器）
    provider: 'ipx',
    ipx: {
      // 开发环境优化
      ...(process.env.NODE_ENV === 'development' && {
        modifiers: {
          quality: 95,
          format: 'png'
        }
      })
    }
  },

  // nuxt-svgo 配置
  svgo: {
    // 启用 TypeScript 声明文件生成
    dts: true,
    // 自动导入路径
    autoImportPath: '~/assets/icons/',
    // 自动导入组件前缀
    componentPrefix: 'icon',
    // SVGO 优化配置
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              // 保留 viewBox，这对响应式很重要
              removeViewBox: false,
              // 内联样式优化
              inlineStyles: {
                onlyMatchedOnce: false
              }
            }
          }
        }
      ]
    }
  }
})
