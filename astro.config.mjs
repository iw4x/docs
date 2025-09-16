// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import './src/styles/global.css';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'IW4x Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/iw4x/docs' }],
			sidebar: [
				{ label: 'Welcome 👋', slug: '' },
				{ label: 'Changelog', slug: 'guides/changelog' },
				{
					label: 'Installing IW4x',
					items: [
						{ label: 'Installing on Windows', slug: 'guides/install-windows' },
						{ label: 'Installing on Linux', slug: 'guides/install-linux' },
					],
				}
			],
		}),
	],
});
