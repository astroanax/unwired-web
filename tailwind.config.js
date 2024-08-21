///** @type {import('tailwindcss').Config} */
//export default {
//	content: ['./src/**/*.{html,js,svelte,ts}'],
//
//	theme: {
//		extend: {}
//	},
//
//	plugins: [require('@tailwindcss/typography')]
//};

import flowbitePlugin from 'flowbite/plugin';

import { tuwTheme } from './tuw-theme2.js';
// @ts-check
import { join } from 'path';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */
export default {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},

	plugins: [
		flowbitePlugin,
		skeleton({
			themes: {
				custom: [tuwTheme],
				preset: ['crimson']
			}
		}),
		plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    })

	]
};
