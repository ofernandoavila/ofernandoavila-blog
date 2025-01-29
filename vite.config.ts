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
    },
    server: {
        headers: {
            'Access-Control-Allow-Origin': '*', // Permite qualquer origem (para desenvolvimento)
            'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type,Authorization',
        },
    }
})
