
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const tuwTheme: CustomThemeConfig = {
    name: 'tuw-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "2px",
		"--theme-rounded-container": "4px",
		"--theme-border-base": "0px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "var(--color-primary-700)",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "var(--color-secondary-100)",
		// =~= Theme Colors  =~=
		// primary | #04091e 
		"--color-primary-50": "217 218 221", // #d9dadd
		"--color-primary-100": "205 206 210", // #cdced2
		"--color-primary-200": "192 194 199", // #c0c2c7
		"--color-primary-300": "155 157 165", // #9b9da5
		"--color-primary-400": "79 83 98", // #4f5362
		"--color-primary-500": "4 9 30", // #04091e
		"--color-primary-600": "4 8 27", // #04081b
		"--color-primary-700": "3 7 23", // #030717
		"--color-primary-800": "2 5 18", // #020512
		"--color-primary-900": "2 4 15", // #02040f
		// secondary | #831313 
		"--color-secondary-50": "236 220 220", // #ecdcdc
		"--color-secondary-100": "230 208 208", // #e6d0d0
		"--color-secondary-200": "224 196 196", // #e0c4c4
		"--color-secondary-300": "205 161 161", // #cda1a1
		"--color-secondary-400": "168 90 90", // #a85a5a
		"--color-secondary-500": "131 19 19", // #831313
		"--color-secondary-600": "118 17 17", // #761111
		"--color-secondary-700": "98 14 14", // #620e0e
		"--color-secondary-800": "79 11 11", // #4f0b0b
		"--color-secondary-900": "64 9 9", // #400909
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #04091e 
		"--color-surface-50": "217 218 221", // #d9dadd
		"--color-surface-100": "205 206 210", // #cdced2
		"--color-surface-200": "192 194 199", // #c0c2c7
		"--color-surface-300": "155 157 165", // #9b9da5
		"--color-surface-400": "79 83 98", // #4f5362
		"--color-surface-500": "4 9 30", // #04091e
		"--color-surface-600": "4 8 27", // #04081b
		"--color-surface-700": "3 7 23", // #030717
		"--color-surface-800": "2 5 18", // #020512
		"--color-surface-900": "2 4 15", // #02040f
		
	}
}
