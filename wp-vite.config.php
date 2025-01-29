<?php
return [
    'vite' => [
        'entry' => 'src/main.tsx',
        'outDir' => 'assets/build',
    ],
    'wp' => [
        'script_handle' => 'theme-vite',
        'localize_script' => true,
        'localize_data' => [
            'wpViteData' => 'https://api.example.com',
        ],
    ],
];