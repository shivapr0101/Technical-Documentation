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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Technical Documentation',

        logo: {
          alt: 'Technical Documentation Logo',
          src: 'img/logo.svg',
        },

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'technicalDocumentation',
            position: 'left',
            label: 'Documentation',
          },

          {
            href: 'https://github.com/shivapr0101/Technical-Documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
  style: 'dark',
  links: [
    {
      title: 'Documentation',
      items: [
        {
          label: 'Training Guide',
          to: '/docs/Docs/Training Guide/Basic Training',
        },
        {
          label: 'Release Notes',
          to: '/docs/Docs/Release Notes/7.7.564',
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Procify. All rights reserved.`,
},

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;