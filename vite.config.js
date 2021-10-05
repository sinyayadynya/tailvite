import liveReload from 'vite-plugin-live-reload';

export default {
  plugins: [liveReload(__dirname + '/**/*.(php|inc|theme|twig|scss)')],

  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // check if '/components/style.scss' is correct
      // Css file must be imported in js files, see main.js
      input: ['/src/main.js'],
      // Remove the [hash] since Drupal will take care of that.
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `chunks/[name].[hash].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },

  server: {
    // required to load scripts from custom host
    cors: true,

    // we need a strict port to match on PHP side
    // change freely, but update on PHP to match the same port
    strictPort: true,
    port: 12321,

    hmr: {
      host: 'localhost',
    },
  },

  // not sure about this one, inspired from https://github.com/segovia94/drupal-vite-poc
  resolve: {
    alias: {
      jquery: '/src/jquery.module.js',
    },
  },
};
