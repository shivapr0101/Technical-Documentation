// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);

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
      {
        docs: {
          sidebarPath: './sidebars.js',
          includeCurrentVersion: true,
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

    navbar: {
      title: 'Procify Documentation',

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

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

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
};

export default config;