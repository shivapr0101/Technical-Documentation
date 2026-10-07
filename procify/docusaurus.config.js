// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Procify Technical Documentation',
  tagline: 'Procify Technical Documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages URL
  url: 'https://shivapr0101.github.io',
  baseUrl: '/Technical-Documentation/',

  // GitHub repository
  organizationName: 'shivapr0101',
  projectName: 'Technical-Documentation',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',

          editUrl:
            'https://github.com/shivapr0101/Technical-Documentation/tree/main/',
        },

        blog: {
          showReadingTime: true,

          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          editUrl:
            'https://github.com/shivapr0101/Technical-Documentation/tree/main/blog/',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
  navbar: {
    title: 'Procify Technical Documentation',

    logo: {
      alt: 'Procify',
      src: 'img/procify-logo.png',
      width: 42,
      height: 42,
    },

    items: [
      {
        label: 'Version 7.7.564',
        position: 'left',
        className: 'navbar-version',
      },

      {
        to: '/',
        label: 'Home',
        position: 'right',
      },

      {
        to: '/docs/Docs/user%20Guide/basic%20user%20guide',
        label: 'User Guide',
        position: 'right',
      },

      {
        to: '/docs/Docs/Training%20Guide/Basic%20Training',
        label: 'Training Guide',
        position: 'right',
      },

      {
        to: '/docs/Docs/Release%20Notes/7.7.564',
        label: 'Release Notes',
        position: 'right',
      },

      {
        type: 'search',
        position: 'right',
      },
    ],
  },

  docs: {
    sidebar: {
      hideable: false,
      autoCollapseCategories: false,
    },
  },

  colorMode: {
    defaultMode: 'light',
    disableSwitch: true,
    respectPrefersColorScheme: false,
  },
},