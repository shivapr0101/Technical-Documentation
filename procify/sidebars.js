/**
 * Procify Technical Documentation
 *
 * OpenUI5-style documentation navigation.
 */

const sidebars = {
  technicalDocumentation: [
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Docs/user Guide/basic user guide',
          label: 'Basic User Guide',
        },
      ],
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