The only change is in the navbar items section. The Training Guide item (type: 'docSidebar', sidebarId: 'trainingGuideSidebar') is replaced with a dropdown item, marked with a comment below. Here is your full config:

javascript
// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Procify Technical Documentation',

  tagline:
    'An enterprise-class low-code platform for transforming business ideas into outcomes',

  favicon: 'img/favicon.ico',

  // SEO metadata
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

  // GitHub Pages configuration
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

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  // Local documentation search
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

  themeConfig: {
    image: 'img/procify-social-card.png',

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },

    // Right-hand "On this page" panel: show only ## headings
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 2,
    },

    // Top navigation
    navbar: {
      title: 'Procify Documentation',

      logo: {
        alt: 'Procify Logo',
        src: 'img/procify-logo.png',
        srcDark: 'img/procify-logo-dark.png',
        href: '/Technical-Documentation/',
      },

      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
          exact: true,
        },
        {
          type: 'docSidebar',
          sidebarId: 'userGuideSidebar',
          label: 'User Guide',
          position: 'left',
        },

        // ===== CHANGED: Training Guide is now a dropdown =====
        {
          type: 'dropdown',
          label: 'Training Guide',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'Docs/Training Guide/Basic Training',
              label: 'Basic Training',
            },
            {
              type: 'doc',
              docId: 'Docs/Training Guide/Advance Training Guide',
              label: 'Advanced Training',
            },
          ],
        },
        // ===== END CHANGE =====

        {
          type: 'docSidebar',
          sidebarId: 'releaseNotesSidebar',
          label: 'Release Notes',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/shivapr0101/Technical-Documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    // Documentation sidebar
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    // Footer
    footer: {
      style: 'light',

      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'User Guide',
              to: '/docs/Docs/user Guide/basic user guide',
            },
            {
              label: 'Basic Training',
              to: '/docs/Docs/Training Guide/Basic Training',
            },
            {
              label: 'Advanced Training',
              to: '/docs/Docs/Training Guide/Advance Training Guide',
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
        {
          title: 'Developer Resources',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/shivapr0101/Technical-Documentation',
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
  },

  // Markdown configuration
  markdown: {
    format: 'detect',
  },
};

export default config;