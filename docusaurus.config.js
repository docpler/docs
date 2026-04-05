import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'docpler',
  tagline: 'Convert HWP documents to Markdown',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docpler.github.io',
  baseUrl: '/docs/',

  organizationName: 'docpler',
  projectName: 'docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: { label: '한국어' },
      en: { label: 'English' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/docpler/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'docpler',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/docpler/docpler-python',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Install',
            items: [
              { label: 'PyPI', href: 'https://pypi.org/project/docpler/' },
              { label: 'Homebrew', href: 'https://github.com/docpler/homebrew-tap' },
              { label: 'CLI Releases', href: 'https://github.com/docpler/docpler-cli/releases' },
            ],
          },
          {
            title: 'Plugins',
            items: [
              { label: 'markitdown-hwp', href: 'https://pypi.org/project/markitdown-hwp/' },
              { label: 'Claude Code Plugin', href: 'https://github.com/docpler/docpler-claude-plugin' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Demo', href: 'https://huggingface.co/spaces/rightstack/docpler' },
              { label: 'GitHub', href: 'https://github.com/docpler/docpler-python' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RightStack Co., Ltd.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'python', 'rust', 'toml', 'powershell'],
      },
    }),
};

export default config;
