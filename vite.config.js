import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",
    publicDir:"public",
    build: {
        outDir:"dist",
        rollupOptions: {
            input: {
                index: resolve(__dirname, "src/index.html"),
                shop: resolve(__dirname, "src/shop.html"),
                
            },
        },
    },
});