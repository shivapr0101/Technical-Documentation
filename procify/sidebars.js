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
      items: [
        {
          type: 'category',
          label: 'Installation',
          items: [
            'User-Guide/Installation/installation',
          ],
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'User-Guide/Configuration/configuration',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Training Guide',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Basic Training',
          items: [
            'Training-Guide/Basic-Training/intro',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Training',
          collapsed: false,
          items: [
            'Training-Guide/Advanced-Training/Attach-Debugger',
            'Training-Guide/Advanced-Training/Scheduler-Monitoring',
            'Training-Guide/Advanced-Training/Message-Monitoring',
            'Training-Guide/Advanced-Training/Workflows',
            'Training-Guide/Advanced-Training/Permissions',
            'Training-Guide/Advanced-Training/Row-Wise-Auth',
            'Training-Guide/Advanced-Training/Local-Archive',
            'Training-Guide/Advanced-Training/Account',
            'Training-Guide/Advanced-Training/Charts',
            'Training-Guide/Advanced-Training/Notifications',
            'Training-Guide/Advanced-Training/Pivot-Modeller',
            'Training-Guide/Advanced-Training/APK-IPA-Debugging',
            'Training-Guide/Advanced-Training/Account-Console',
            'Training-Guide/Advanced-Training/Auto-Update-Data',
            'Training-Guide/Advanced-Training/Customer-Branding',
            'Training-Guide/Advanced-Training/KloSectionXlsx',
            'Training-Guide/Advanced-Training/Deeplink',
            'Training-Guide/Advanced-Training/Banner',
            'Training-Guide/Advanced-Training/Git-Repository',
            'Training-Guide/Advanced-Training/SQL-Executor',
            'Training-Guide/Advanced-Training/Transports',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Release Notes',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '7.2.350',
          items: [
            'Release-Notes/7.2.350/release-note',
          ],
        },
        {
          type: 'category',
          label: '7.2.344',
          items: [
            'Release-Notes/7.2.344/release-note',
          ],
        },
      ],
    },
  ],
};

export default sidebars;