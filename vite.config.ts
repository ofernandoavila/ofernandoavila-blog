import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import * as path from 'path'


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        laravel({
            input: [
                'src/main.tsx'
            ],
            publicDirectory: 'assets',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'assets'),
        },
    },
    build: {
        assetsDir: '.',
    }
})
