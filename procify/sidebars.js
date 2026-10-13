// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  UserGuideSidebar: [
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Docs/User Guide/Developer AI - User guide',
          label: 'Developer AI - User guide',
        },
        {
          type: 'doc',
          id: 'Docs/User Guide/Heading Two',
          label: 'Heading Two',
        },
      ],
    },
  ],

  trainingGuideSidebar: [
    {
      type: 'category',
      label: 'Training Guide',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Docs/Training Guide/Advance Training Guide',
          label: 'Advanced Training Guide',
        },
      ],
    },
  ],

  releaseNotesSidebar: [
    {
      type: 'category',
      label: 'Release Notes',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Docs/Release Notes/7.7.564',
          label: '7.7.564',
        },
        {
          type: 'doc',
          id: 'Docs/Release Notes/7.2.359',
          label: '7.2.359',
        },
      ],
    },
  ],
};

module.exports = sidebars;