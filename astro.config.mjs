// @ts-check
import { defineConfig } from "astro/config";
import { unified } from '@astrojs/markdown-remark'
import starlight from '@astrojs/starlight';
import starlightAutoDrafts from 'starlight-auto-drafts'
import starlightImageZoom from 'starlight-image-zoom'
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
//
export default defineConfig({
  output: 'static',
  site: 'https://docs.iw4x.io',
  markdown: {
    processor: unified(),
  },

  integrations: [
    starlight({
      title: 'Docs',
      favicon: '/favicon.svg',
      logo: { src: './src/assets/logo.svg' },
      defaultLocale: 'root',
      lastUpdated: true,

      // Navigation
      //
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            {
              label: 'Quickstart',
              link: '/get-started/quickstart/'
            },
            {
              label: 'Manual Installation',
              items: [
                {
                  label: 'On Windows',
                  link: '/get-started/manual-install/windows-guide/'
                },
                {
                  label: 'On Linux',
                  link: '/get-started/manual-install/linux-guide/'
                },
                {
                  label: 'On MacOS',
                  link: '/get-started/manual-install/macos-guide/'
                },
              ],
            },
          ],
        },
        {
          label: 'Guides',
          items: [{ autogenerate: { directory: 'guides' } }],
        },
        {
          label: 'Modding',
          items: [{ autogenerate: { directory: 'modding' } }],
        },
        {
          label: 'Server Hosting',
          items: [{ autogenerate: { directory: 'hosting' } }],
        },
        {
          label: 'Other',
          items: [{ autogenerate: { directory: 'other' } }],
        }
      ],

      // Internationalization
      //
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        ru: {
          label: 'Русский',
          lang: 'ru',
        },
      },

      // Styling
      //
      customCss: ['./src/styles/custom.css'],

      // Git integration
      //
      editLink: {
        baseUrl: 'https://github.com/iw4x/docs/edit/main/',
      },

      // Social links
      //
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/iw4x',
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.com/invite/pV2qJscTXf',
        },
        {
          icon: 'twitter',
          label: 'Twitter',
          href: 'https://x.com/IW4x_dev',
        },
      ],

      // Custom footer
      //
      components: {
        Footer: './src/components/Footer.astro',
      },

      // Plugins
      //
      plugins: [
        starlightImageZoom(),
        starlightAutoDrafts(),
        starlightLinksValidator(),
      ],
    }),
  ],

  // Development server configuration
  //
  vite: {
    server: {
      allowedHosts: ['docs.iw4x.io'],
    },
  },
});
