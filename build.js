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
const publicDir = path.resolve('public');
const templatePath = path.join(publicDir, 'index.template.html');
const indexPath = path.join(publicDir, 'index.html');

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
        const { css } = await postcss([autoprefixer]).process(source, { from: undefined });
        return css;
      },
    }),
    watchPlugin
  ],
};

if (watch || dev) {
  const debugSettings = {
    ...commonSettings,
    logLevel: "debug",
    sourcemap: "linked"
  };

  const debugMode = await esbuild.context(debugSettings);
  console.log("Watching for changes...");
  await debugMode.rebuild();
  writeIndexHtml({
    js: 'assets/index.js',
    css: 'assets/styles/index.css'
  });

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
  const productionSettings = {
    ...commonSettings,
    entryNames: '[dir]/[name]-[hash]',
    sourcemap: false,
  };

  console.log("Building with production settings...", productionSettings);

  const result = await esbuild.build(productionSettings);
  const { js, css } = getBuiltAssets(result.metafile);

  writeIndexHtml({ js, css });
  console.log("Build completed.");
}

function getBuiltAssets(metafile) {
  const outputs = metafile.outputs;
  let js;
  let css;

  for (const file in outputs) {
    const output = outputs[file];
    if (output.entryPoint?.endsWith('src/index.js')) {
      js = path.relative(publicDir, file).replaceAll(path.sep, '/');
    }
    if (output.entryPoint?.endsWith('src/styles/index.scss')) {
      css = path.relative(publicDir, file).replaceAll(path.sep, '/');
    }
  }

  if (!js || !css) {
    throw new Error('Failed to resolve built asset filenames.');
  }

  return { js, css };
}

function writeIndexHtml({ js, css }) {
  let html = fs.readFileSync(templatePath, 'utf-8');

  html = html.replace(
    '<!-- CSS_PLACEHOLDER -->',
    css ? `<link rel="stylesheet" href="./${css}">` : ''
  );

  html = html.replace(
    '<!-- JS_PLACEHOLDER -->',
    `<script src="./${js}" async defer></script>`
  );

  fs.writeFileSync(indexPath, html, 'utf-8');
}
