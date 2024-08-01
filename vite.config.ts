import {configDefaults, defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		exclude: [
			...configDefaults.exclude,
			// Sigh https://github.com/vitest-dev/vitest/issues/5969
			'distribution/**',
		],
	},
});
