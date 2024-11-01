// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: '/',
  favicon: 'img/favicon.svg',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  tagline: 'Dog Training World Wide',
  title: 'K9Sit.com',
  url: 'https://k9sit.com',
  organizationName: 'farnsworth2008', // Usually your GitHub org/user name.
  projectName: 'k9sit', // Usually your repo name.

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
        title: 'K9Sit.com',
        logo: {
          alt: 'K9Sit.com Logo',
          src: 'img/favicon.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'at-home-training',
            position: 'left',
            label: 'Services',
          },
          {
            href: 'https://www.k9sit.com',
            label: 'Service Areas',
            position: 'right',
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
              {
                label: 'K9Sit Service Areas',
                href: 'https://www.k9sit.com/',
              },
            ],
          },
        ],
        copyright: `K9Sit.com`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
