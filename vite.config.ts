import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

/**
 * @description Vite config
 */
export default defineConfig({
	build: {
		lib: {
			// Entry point for the library
			entry: './src/index.ts',
			
			// Generate both ES Module and CommonJS formats
			formats: ['es', 'cjs', 'umd'],
			name: '@codevault79/nuxt-i18n-theme',
			// ES module will output as .esm.js, CommonJS as .cjs.js
			fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`
		},
		rollupOptions: {
			// Externalize Vue to avoid bundling it
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		},
		// Enable minification
		// minify: true
	},
	// css: {
  //   postcss: {
  //     plugins: []
  //   }
  // },
	plugins: [
		vue(),
		dts({
			// Generate .d.ts files in the dist/types directory
			outDir: 'dist/types',
			// Ensure type declarations are included
			insertTypesEntry: true,
		})
	]
})
