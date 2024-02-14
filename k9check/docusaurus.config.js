// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: '/',
  favicon: 'diploma.svg',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  tagline: 'Dogs for checking areas for guns',
  title: 'K9Check.com',
  url: 'https://k9check.com',
  organizationName: 'farnsworth2008', // Usually your GitHub org/user name.
  projectName: 'k9check', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'K9Check.com',
        logo: {
          alt: 'k9me.com Logo',
          src: 'check.svg',
        },
        items: [
          {
            docId: 'about-k9check',
            label: 'Services',
            position: 'left',
            type: 'doc',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=100090107385858'
              },
            ],
          },
        ],
        copyright: `k9me.com`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
