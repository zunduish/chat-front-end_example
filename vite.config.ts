import { defineConfig } from "vite";
import alias from "@rollup/plugin-alias";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

const rootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // Set the development server port to 3000
  },
  plugins: [
    // ...
    vue(), alias(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(rootDir, "src"),
      "@src": resolve(rootDir, "src"),
      "@custom_types": resolve(rootDir, "src/@custom_types"),
    },
  },
});
