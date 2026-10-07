// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Procify Technical Documentation',
  tagline: 'Documentation for Procify',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages
  url: 'https://shivapr0101.github.io',
  baseUrl: '/Technical-Documentation/',

  organizationName: 'shivapr0101',
  projectName: 'Technical-Documentation',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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

          showLastUpdateTime: false,
          showLastUpdateAuthor: false,

          breadcrumbs: true,

          remarkPlugins: [],
          rehypePlugins: [],
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/procify-social-card.png',

      navbar: {
        title: 'Procify',

        logo: {
          alt: 'Procify',
          src: 'img/procify-logo.png',
          width: 34,
          height: 34,
        },

        hideOnScroll: false,

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'technicalDocumentation',
            label: 'Documentation',
            position: 'left',
          },

          {
            type: 'dropdown',
            label: 'Guides',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'Docs/user Guide/basic user guide',
                label: 'User Guide',
              },
              {
                type: 'doc',
                docId: 'Docs/Training Guide/Basic Training',
                label: 'Training Guide',
              },
            ],
          },

          {
            type: 'doc',
            docId: 'Docs/Release Notes/7.7.564',
            label: 'Release Notes',
            position: 'left',
          },

          {
            type: 'html',
            value: '<span class="navbar-version-label">7.7.564</span>',
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
          hideable: true,
          autoCollapseCategories: false,
        },
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      metadata: [
        {
          name: 'keywords',
          content: 'Procify, documentation, user guide, training guide, release notes',
        },
      ],
    }),
};

export default config;