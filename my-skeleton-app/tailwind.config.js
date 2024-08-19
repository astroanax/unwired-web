import { join } from 'path'

import { skeleton } from '@skeletonlabs/tw-plugin';
import { tuw } from './src/tuw'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [
		skeleton({
			themes: {
				custom: [
					tuw,
				],
			},
		}),
	],
};
