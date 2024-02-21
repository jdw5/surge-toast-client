import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "Surge Toast",
			fileName: `surge-toast`,
		},
		rollupOptions: {
			external: ["vue", "@inertiajs/vue3", "axios"],
		},
	},
})