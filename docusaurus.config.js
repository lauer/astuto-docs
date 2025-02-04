// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Astuto Documentation',
  tagline: 'Astuto Docs Tagline',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.astuto.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'astuto', // Usually your GitHub org/user name.
  projectName: 'astuto-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/astuto/astuto-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'https://api.astuto.io/api-docs/v1/swagger.yaml',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          primaryColor: '#000000',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Astuto Documentation',
        logo: {
          alt: 'Astuto Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: '📚 Documentation',
            to: '/',
            position: 'left',
            activeBaseRegex: '^(?!/api)', // every page except the api page
          },
          {
            label: '💻 API Documentation',
            to: '/api',
            position: 'left',
            activeBaseRegex: 'api/*',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Useful pages',
            items: [
              {
                label: 'Deploy with Docker',
                to: '/deploy-docker',
              },
              {
                label: 'OAuth Configuration Basics',
                to: '/oauth/oauth-configuration-basics',
              },
              {
                label: 'Common OAuth Providers',
                to: '/oauth/common-oauth-providers',
              },
              {
                label: 'Custom Domain Configuration',
                to: '/custom-domain',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/astuto/astuto',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/SrtUMRp',
              },
              {
                label: 'Crowdin',
                href: 'https://crwd.in/astuto',
              },
              {
                label: 'Product Hunt',
                href: 'https://www.producthunt.com/products/astuto',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Astuto Documentation',
                to: '/',
              },
              {
                label: 'API Documentation',
                to: '/api/',
              },
              {
                label: 'Astuto Home Page',
                to: 'https://astuto.io',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Astuto`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
