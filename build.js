import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import esbuildEnvfilePlugin from 'esbuild-envfile-plugin';
import fs from 'fs';
import path from 'path';

const port = 8000;
const args = process.argv.slice(2);
const watch = args.includes("--watch");
const dev = args.includes("--dev");

const watchPlugin = {
  name: 'watch-plugin',
  setup(build) {
    build.onStart(() => {
      console.log(`Build starting: ${new Date(Date.now()).toLocaleString()}`);
    });
    build.onEnd((result) => {
      if (result.errors.length > 0) {
        console.log(`Build finished, with errors: ${new Date(Date.now()).toLocaleString()}`);
        console.log(result.errors);
      } else {
        console.log(`Build finished successfully: ${new Date(Date.now()).toLocaleString()}`);
      }
    });
  }
};

const commonSettings = {
  logLevel: 'debug',
  metafile: true,
  entryPoints: [
    'src/styles/index.scss',
    'src/index.js'
  ],
  outdir: 'public/assets',
  bundle: true,
  loader: {
    '.js': 'jsx',
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.woff': 'dataurl',
    '.woff2': 'dataurl',
    '.eot': 'dataurl',
    '.ttf': 'dataurl',
    '.svg': 'dataurl',
  },
  plugins: [
    esbuildEnvfilePlugin,
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source);
        return css;
      },
    }),
    watchPlugin
  ],
};

if (watch || dev) {
  let debugSettings = {
    ...commonSettings,
    logLevel: "debug",
    sourcemap: "linked"
  };

  let debugMode = await esbuild.context(debugSettings);
  console.log("Watching for changes...");

  if (watch) {
    debugMode.watch();
  }

  if (dev) {
    debugMode.serve({
      servedir: 'public',
      port: port
    });
  }
} else {
  let productionSettings = {
    ...commonSettings,
    entryNames: '[dir]/[name]-[hash]', // 🛠️ Add content-based hashing
    sourcemap: false,
  };

  console.log("Building with production settings...", productionSettings);

  const result = await esbuild.build(productionSettings);

  console.log("Build completed. Updating index.html references...");
  await updateHtmlReferences(result.metafile);
}

async function updateHtmlReferences(metafile) {
  const outputs = metafile.outputs;
  const assetMap = {};

  for (const file in outputs) {
    if (file.endsWith('.js')) {
      assetMap.js = path.basename(file);
    }
    if (file.endsWith('.css')) {
      assetMap.css = path.basename(file);
    }
  }

  const indexPath = path.resolve('public/index.html');
  let html = fs.readFileSync(indexPath, 'utf-8');

  html = html.replace(/\.\/assets\/index\.js/, `./assets/${assetMap.js}`);
  html = html.replace(/\.\/assets\/styles\/index\.css/, `./assets/styles/${assetMap.css}`);

  fs.writeFileSync(indexPath, html, 'utf-8');
  console.log("✅ index.html updated with new hashed filenames!");
}
