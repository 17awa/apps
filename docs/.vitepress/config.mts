import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "SB日报工作室",
  description: "Science",
  lastUpdated: true, // string | boolean
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdatedText: "最后更新",
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文章",
            buttonAriaLabel: "搜索文章",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '文章', link: '/docs' }
    ],

    sidebar: [
      {
        text: '文章',
        items: [
          { text: '主页', link: '/docs' },
          { text: '段xx竟然交女朋友了?', link: '/docs1' },
          { text: '严永某回归了', link: '/docs2' },
          { text: '', link: '/docs3' },
        ]
      }
    ],

    footer: {
      message: '基于 MIT 许可发布',
    },

    docFooter: {
      prev: '上一章',
      next: '下一章'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
  

    
  
})
