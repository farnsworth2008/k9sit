// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  tagline: 'North East Raleigh, NC',
  title: 'K9 Sit Service -- North East Raleigh, NC',
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
        title: 'Home',
        logo: {
          alt: 'K9 Sit Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'dog-training',
            position: 'left',
            label: 'Services',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.k9sit.com',
            label: 'Locations',
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
                label: 'Rover',
                href: 'https://www.rover.com/members/mark-f-high-quality-dog-training/'
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=100090107385858'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Rover',
                href: 'https://www.rover.com/members/mark-f-high-quality-dog-training',
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
