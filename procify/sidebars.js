/**
 * Procify Technical Documentation
 *
 * One sidebar per folder, so Previous/Next stays inside the same folder.
 */

const sidebars = {
  userGuideSidebar: [
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
  ],

  trainingGuideSidebar: [
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
      ],
    },
  ],
};

export default sidebars;