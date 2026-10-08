// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // =========================================================
  // SITE INFORMATION
  // =========================================================

  title: 'Procify Technical Documentation',
  tagline: 'Documentation for Procify',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // =========================================================
  // GITHUB PAGES
  // =========================================================

  url: 'https://shivapr0101.github.io',
  baseUrl: '/Technical-Documentation/',

  organizationName: 'shivapr0101',
  projectName: 'Technical-Documentation',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // =========================================================
  // INTERNATIONALIZATION
  // =========================================================

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // =========================================================
  // LOCAL SEARCH
  // =========================================================

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],

        // Highlight searched words on the target page
        highlightSearchTermsOnTargetPage: true,

        // Open the exact search result page
        explicitSearchResultPath: true,

        // Search documentation
        indexDocs: true,

        // Do not search blog
        indexBlog: false,

        // Search other website pages
        indexPages: true,
      },
    ],
  ],

  // =========================================================
  // PRESETS
  // =========================================================

  presets: [
    [
      'classic',

      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // -----------------------------------------------------
        // DOCUMENTATION
        // -----------------------------------------------------

        docs: {
          sidebarPath: './sidebars.js',

          showLastUpdateTime: false,
          showLastUpdateAuthor: false,

          breadcrumbs: true,

          remarkPlugins: [],
          rehypePlugins: [],
        },

        // -----------------------------------------------------
        // BLOG
        // -----------------------------------------------------

        blog: false,

        // -----------------------------------------------------
        // THEME
        // -----------------------------------------------------

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // =========================================================
  // THEME CONFIGURATION
  // =========================================================

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // -------------------------------------------------------
      // SOCIAL / SEO IMAGE
      // -------------------------------------------------------

      image: 'img/procify-social-card.png',

      // -------------------------------------------------------
      // NAVBAR
      // -------------------------------------------------------

      navbar: {
        title: 'Procify',

        // Procify logo
        logo: {
          alt: 'Procify',
          src: 'img/procify-logo.png',
          width: 48,
          height: 48,
        },

        hideOnScroll: false,

        items: [

          // ---------------------------------------------------
          // HOME
          // ---------------------------------------------------

          {
            to: '/',
            label: 'Home',
            position: 'left',
          },

          // ---------------------------------------------------
          // DOCUMENTATION
          // ---------------------------------------------------

          {
            type: 'docSidebar',
            sidebarId: 'technicalDocumentation',
            label: 'Documentation',
            position: 'left',
          },

          // ---------------------------------------------------
          // GUIDES
          // ---------------------------------------------------

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

          // ---------------------------------------------------
          // RELEASE NOTES
          // ---------------------------------------------------

          {
            type: 'doc',
            docId: 'Docs/Release Notes/7.7.564',
            label: 'Release Notes',
            position: 'left',
          },

          // ---------------------------------------------------
          // VERSION
          // ---------------------------------------------------

          {
            type: 'html',
            value:
              '<span class="navbar-version-label">7.7.564</span>',
            position: 'right',
          },

          // ---------------------------------------------------
          // SEARCH
          // ---------------------------------------------------

          {
            type: 'search',
            position: 'right',
          },
        ],
      },

      // -------------------------------------------------------
      // DOCUMENTATION SIDEBAR
      // -------------------------------------------------------

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },

      // -------------------------------------------------------
      // TABLE OF CONTENTS
      // -------------------------------------------------------

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },

      // -------------------------------------------------------
      // COLOR MODE
      // -------------------------------------------------------

      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      // -------------------------------------------------------
      // CODE BLOCKS
      // -------------------------------------------------------

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      // -------------------------------------------------------
      // SEO KEYWORDS
      // -------------------------------------------------------

      metadata: [
        {
          name: 'keywords',
          content:
            'Procify, documentation, user guide, training guide, release notes',
        },
      ],
    }),
};

export default config;