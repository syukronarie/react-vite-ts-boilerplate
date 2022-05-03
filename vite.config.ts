import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@/': path.resolve(__dirname, './src'),
			'@/assets': path.resolve(__dirname, './src/assets'),
			'@/common': path.resolve(__dirname, './src/common'),
			'@/components': path.resolve(__dirname, './src/components'),
			'@/config': path.resolve(__dirname, './src/config'),
			'@/hooks': path.resolve(__dirname, './src/hooks'),
			'@/layouts': path.resolve(__dirname, './src/layouts'),
			'@/lib': path.resolve(__dirname, './src/lib'),
			'@/pages': path.resolve(__dirname, './src/pages'),
			'@/routes': path.resolve(__dirname, './src/routes'),
			'@/store': path.resolve(__dirname, './src/store'),
			'@/styles': path.resolve(__dirname, './src/styles'),
			'@/utils': path.resolve(__dirname, './src/utils')
		}
	}
})
