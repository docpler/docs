/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Installation',
      items: ['installation/python', 'installation/cli', 'installation/markitdown'],
    },
    {
      type: 'category',
      label: 'Usage',
      items: ['usage/python', 'usage/cli', 'usage/markitdown'],
    },
    {
      type: 'category',
      label: 'Plugins',
      items: ['plugins/claude-code', 'plugins/codex'],
    },
    'supported-formats',
    'license',
  ],
};

export default sidebars;
