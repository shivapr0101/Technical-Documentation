// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Procify Technical Documentation',

  tagline:
    'An enterprise-class low-code platform for transforming business ideas into outcomes',

  favicon: 'img/procify-favicon.png',

  // GitHub Pages
  url: 'https://shivapr0101.github.io',
  baseUrl: '/Technical-Documentation/',
  organizationName: 'shivapr0101',
  projectName: 'Technical-Documentation',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content:
          'Procify, documentation, user guide, training guide, release notes',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          includeCurrentVersion: true,
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Documentation Search
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/procify-social-card.png',

      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },

      navbar: {
        logo: {
          alt: 'Procify',
          src: 'img/procify-logo.png',
          srcDark: 'img/procify-logo-dark.png',
          href: '/Technical-Documentation/',
        },

        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
            activeBaseOptional: true,
            exact: true,
          },

          {
            to: '/docs/Docs/user Guide/basic user guide',
            label: 'Documentation',
            position: 'left',
            activeBaseRegex: '/docs/',
          },

          {
            label: 'Guides',
            position: 'left',
            items: [
              {
                label: 'User Guide',
                to: '/docs/Docs/user Guide/basic user guide',
              },
              {
                label: 'Training Guide',
                to: '/docs/Docs/Training Guide/Basic Training',
              },
            ],
          },

          {
            label: 'Release Notes',
            to: '/docs/Docs/Release Notes/7.7.564',
            position: 'left',
          },

          // Search
          {
            type: 'search',
            position: 'right',
          },
        ],
      },

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      footer: {
        style: 'dark',

        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'User Guide',
                to: '/docs/Docs/user Guide/basic user guide',
              },
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

          {
            title: 'Procify',
            items: [
              {
                label: 'Website',
                href: 'https://www.procifynow.com',
              },
              {
                label: 'experts@procifynow.com',
                href: 'mailto:experts@procifynow.com',
              },
            ],
          },
        ],

        copyright: `© ${new Date().getFullYear()} Procify Innovations Pvt Ltd.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;