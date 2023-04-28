const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

const plugins = [tailwindPlugin, webpackPlugin];

const fs = require('fs');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chat2DB',
  tagline: '一款由阿里巴巴开源免费的多数据库客户端工具🚀',
  favicon: 'favicon.ico',
  url: 'https://chat2db.opensource.alibaba.com',
  baseUrl: '/',
  organizationName: 'alibaba',
  projectName: 'chat2db',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars-default.js'),
          editUrl: 'https://github.com/dyte-in/docs/tree/main/',
          breadcrumbs: false,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  plugins: [
    // 接入开源官网的流量统计
    [
      'docusaurus-plugin-includes',
      {
        injectedHtmlTags: {
          headTags: [
            {
              tagName: 'meta',
              attributes: {
                name: 'aes-config',
                content:
                  'pid=xux-opensource&user_type=101&uid=&username=&dim10=Chat2DB',
              },
            },
          ],
          preBodyTags: [
            {
              tagName: 'script',
              attributes: {
                src: '//g.alicdn.com/alilog/mlog/aplus_v2.js',
                id: 'beacon-aplus',
                exparams: 'clog=o&aplus&sidx=aplusSidx&ckx=aplusCkx',
                async: true,
              },
            },
            {
              tagName: 'script',
              attributes: {
                src: '//g.alicdn.com/aes/??tracker/1.0.34/index.js,tracker-plugin-pv/2.4.5/index.js,tracker-plugin-event/1.2.5/index.js,tracker-plugin-jserror/1.0.13/index.js,tracker-plugin-api/1.1.14/index.js,tracker-plugin-perf/1.1.8/index.js,tracker-plugin-eventTiming/1.0.4/index.js',
                async: true,
              },
            },
          ],
        },
      },
    ],
    ...plugins,
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/logo/logo.light.svg',
      navbar: {
        logo: {
          href: '/',
          src: '/logo/logo.light.svg',
          srcDark: '/logo/logo.dark.svg',
          alt: 'Chat2DB',

          width:'80px'
        },
        items: [
          {
            label: '首页',
            href: '/',
          },
          {
            type: 'doc',
            docId: 'guides/quickstart',
            label: '文档',
            position: 'left',
            className: 'new-badge',
          },
          {
            label: '资料',
            type: 'dropdown',
            className: 'dyte-dropdown resources-dropdown',
            items: [
              {
                type: 'html',
                value: resourcesHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
          {
            label: 'Try',
            to: 'http://test.sqlgpt.cn',
          },
          {
            label: 'Github',
            to: 'https://github.com/alibaba/Chat2DB',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      metadata: [
        {
          name: 'keywords',
          content:
            'chat2DB, chat2db, chat2db开源, chat2db开源版, chat2db开源版本, chat2db开源项目, chat2db开源代码, chat2db开源文档, chat2db开源教程, chat2db开源安装, chat2db开源下载, chat2db开源安装教程, chat2db开源安装文档, chat2db开源安装手册, chat2db开源安装指南, chat2db开源安装说明, chat2db开源安装帮助, chat2db开源安装步骤, chat2db开源安装配置, chat2db开源安装环境, chat2db开源安装要求',
        },
        {
          name: 'description',
          content: 'Chat2DB开源版文档',
        },
      ],
      // 最上面的广告位  https://docusaurus.io/docs/api/themes/configuration#announcement-bar
      announcementBar: {
        id: 'announcementBar-2',
        content:
          '⭐ 开源不易，如果觉得本项目对您的工作还是有帮助的话， 请帮忙在<a target="_blank" rel="noopener noreferrer" href="https://github.com/alibaba/Chat2DB">GitHub</a> 点个⭐️Star',
      },
    }),

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;
