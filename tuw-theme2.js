
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const tuwTheme: CustomThemeConfig = {
    name: 'tuw-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-primary-50)",
		"--on-secondary": "var(--color-primary-50)",
		"--on-tertiary": "var(--color-surface-900)",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #791111 
		"--color-primary-50": "235 219 219", // #ebdbdb
		"--color-primary-100": "228 207 207", // #e4cfcf
		"--color-primary-200": "222 196 196", // #dec4c4
		"--color-primary-300": "201 160 160", // #c9a0a0
		"--color-primary-400": "161 88 88", // #a15858
		"--color-primary-500": "121 17 17", // #791111
		"--color-primary-600": "109 15 15", // #6d0f0f
		"--color-primary-700": "91 13 13", // #5b0d0d
		"--color-primary-800": "73 10 10", // #490a0a
		"--color-primary-900": "59 8 8", // #3b0808
		// secondary | #04091e 
		"--color-secondary-50": "217 218 221", // #d9dadd
		"--color-secondary-100": "205 206 210", // #cdced2
		"--color-secondary-200": "192 194 199", // #c0c2c7
		"--color-secondary-300": "155 157 165", // #9b9da5
		"--color-secondary-400": "79 83 98", // #4f5362
		"--color-secondary-500": "4 9 30", // #04091e
		"--color-secondary-600": "4 8 27", // #04081b
		"--color-secondary-700": "3 7 23", // #030717
		"--color-secondary-800": "2 5 18", // #020512
		"--color-secondary-900": "2 4 15", // #02040f
		// tertiary | #f7631b 
		"--color-tertiary-50": "254 232 221", // #fee8dd
		"--color-tertiary-100": "253 224 209", // #fde0d1
		"--color-tertiary-200": "253 216 198", // #fdd8c6
		"--color-tertiary-300": "252 193 164", // #fcc1a4
		"--color-tertiary-400": "249 146 95", // #f9925f
		"--color-tertiary-500": "247 99 27", // #f7631b
		"--color-tertiary-600": "222 89 24", // #de5918
		"--color-tertiary-700": "185 74 20", // #b94a14
		"--color-tertiary-800": "148 59 16", // #943b10
		"--color-tertiary-900": "121 49 13", // #79310d
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
		// error | #791111 
		"--color-error-50": "235 219 219", // #ebdbdb
		"--color-error-100": "228 207 207", // #e4cfcf
		"--color-error-200": "222 196 196", // #dec4c4
		"--color-error-300": "201 160 160", // #c9a0a0
		"--color-error-400": "161 88 88", // #a15858
		"--color-error-500": "121 17 17", // #791111
		"--color-error-600": "109 15 15", // #6d0f0f
		"--color-error-700": "91 13 13", // #5b0d0d
		"--color-error-800": "73 10 10", // #490a0a
		"--color-error-900": "59 8 8", // #3b0808
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
