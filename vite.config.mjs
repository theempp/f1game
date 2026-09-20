import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
export default defineConfig({publicDir:false,plugins:[tailwindcss()],resolve:{alias:{'@':fileURLToPath(new URL('.',import.meta.url))}},build:{outDir:'public/lobby-ui',emptyOutDir:true,lib:{entry:'lobby/main.tsx',formats:['es'],fileName:()=> 'lobby.js',cssFileName:'lobby'}},define:{'process.env.NODE_ENV':JSON.stringify('production')}});
