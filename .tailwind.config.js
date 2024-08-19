/** @type {import('tailwindcss').Config} */
import { tuwTheme } from './tuw-theme.js'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
	  skeleton({
		themes: {
			custom: [
				tuwTheme
			]
		}
	})
  ],
}

