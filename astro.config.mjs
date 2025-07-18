// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://docs.iw4x.dev',
	integrations: [
		starlight({
			title: 'IW4x Docs',
			favicon: '/favicon.png',
			customCss: [
				'./src/styles/custom.css',
			],
			social: [
				{ 
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/iw4x'
				},
				{
					icon: 'blueSky',
					label: 'Bluesky',
					href: 'https://bsky.app/profile/iw4x.dev',
				},
				{
					icon: 'discord',
					label: 'Discord',
					href: 'https://discord.com/invite/pV2qJscTXf',
				},
			],
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		{ label: 'Command Line Arguments', slug: 'guides/cli-args' },
				// 	],
				// },
				{
					label: 'Installation',
					autogenerate: { directory: 'install' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Server Hosting',
					autogenerate: { directory: 'servers' },
				},
				{
					label: 'Modding',
					autogenerate: { directory: 'modding' },
				},
				{
					label: 'Misc',
					autogenerate: { directory: 'misc' },
				}
			],
		}),
	],

	vite: {
		server: {
			allowedHosts: ['docs.iw4x.dev']
		}
	}
});
