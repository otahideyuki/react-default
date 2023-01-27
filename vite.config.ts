import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react()
	],
	base:
		process.env.NODE_ENV === 'production'
			// ? 'https://www.asahicom.jp/special/null/'	// 本番
			? '/special/null/'						// 本番
			: '/special/null/',						// 検証
	css: {
		modules: {
			// generateScopedName:
			// 	process.env.NODE_ENV === 'production'
			// 		? '[hash:4]'					// 本番：ランダム生成
			// 		: '_[local]__[hash:base64:5]',	// 検証：クラス名+ランダム生成
		},
		preprocessorOptions: {
			scss: {
				// Scssを全ページで読み込み
				additionalData: `@import "../styles/_mixin.scss";`,
			}
		}
	},
	server: {
		// localhostをIPアドレスでも表示可能にする（スマホでも検証可能に）
		// host: true,
		// Port番号を変更する（場合によって使用）
		// port: 8888,
	},
	build: {
		chunkSizeWarningLimit: 100000000
	},
})
