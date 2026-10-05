// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  technicalDocumentation: [
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [],
    },

    {
      type: 'category',
      label: 'Training Guide',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Docs/Training Guide/Basic Training',
          label: 'Basic Training',
        },
      ],
    },

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
      ],
    },
  ],
};

export default sidebars;