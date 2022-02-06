// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BlogStream',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'WebXDAO', // Usually your GitHub org/user name.
  projectName: 'BlogStream', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/WebXDAO/BlogStream',
          routeBasePath: '/'
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
        logo: {
          alt: 'BlogStream Logo',
          src: 'img/Logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: 'https://www.google.com', label: 'Live', position: 'left'},
          {
            href: 'https://github.com/WebXDAO/BlogStream',
            position: 'right',
            label: 'GitHub'
          },
          {
            src: 'img/logo.svg',
            srcDark: 'img/logo_dark.svg',
            href: 'https://discord.gg/Nu2m3CaX',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
  announcementBar: {
  id: 'support_us',
  content:
    '🎉 Thank you for checking out <a target="_blank" rel="noopener noreferrer" href="https://github.com/webxdao/Blogstream">BlogStream</a> 🎉',
  backgroundColor: 'lightpink',
  textColor: '#091E42',
  isCloseable: false,
},
      footer: {
        logo: {
        alt: 'BlogStream Logo',
        src: './img/Logo.svg',
        href: 'https://github.com/WebXDAO/BlogStream',
      },
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Nu2m3CaX',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/WebXDAO',
              },
            ],
          },
          {
            title: 'Contribute',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/WebXDAO/BlogStream',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WebXDAO. All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

};

module.exports = config;
