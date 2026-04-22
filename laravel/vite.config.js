import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
        host: '0.0.0.0',
        port: 5173,
        strictport: true,
        cors: {
            origin: '*',
        },
        hmr: {
            protocol: 'wss',
            host: process.env.CODESPACE_NAME
                ? `${process.env.CODESPACE_NAME}-5173.app.github.dev`
                : 'localhost',
            clientPort: 443,
        }

    }
});
