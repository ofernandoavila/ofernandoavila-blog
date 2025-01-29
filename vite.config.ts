import { defineConfig } from 'vite'
import { wordpress } from "wordpress-vite-plugin";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        wordpress({
            input: [
                'src/main.tsx'
            ],
            refresh: [
                '**.php',
                '**.vue',
                '**.css',
            ],
            namespace: "theme-vite",
            ssrExternal: true
        }),
    ],
    server: {
        headers: {
            'Access-Control-Allow-Origin': '*', // Permite qualquer origem (para desenvolvimento)
            'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type,Authorization',
        },
    }
})