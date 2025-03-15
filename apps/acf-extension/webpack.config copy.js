const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { BannerPlugin } = require('webpack');
const path = require('path');
const fs = require('fs');

function modify(buffer, { KEY, VITE_PUBLIC_NAME, OAUTH_CLIENT_ID, VITE_PUBLIC_RELEASE_VERSION }) {
  // copy-webpack-plugin passes a buffer
  const manifest = JSON.parse(buffer.toString());
  // make any modifications you like, such as
  manifest.version = VITE_PUBLIC_RELEASE_VERSION.replace('v', '');
  manifest.name = VITE_PUBLIC_NAME;
  if (OAUTH_CLIENT_ID) {
    manifest.oauth2.client_id = OAUTH_CLIENT_ID;
  }
  if (KEY) {
    manifest.key = KEY;
  }

  return JSON.stringify(manifest, null, 2);
}

module.exports = {
  output: {
    path: join(__dirname, '../../dist/acf-extension'),
  },
  plugins: [
    new NxAppWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'swc',
      main: './src/background/index.ts',
      additionalEntryPoints: [
        {
          entryName: 'content_scripts',
          entryPath: './src/content_scripts/index.ts',
        },
        {
          entryName: 'content_scripts_main',
          entryPath: './src/content_scripts_main/index.ts',
        },
        {
          entryName: 'wizard',
          entryPath: './src/wizard/index.ts',
        },
        {
          entryName: 'wizard-popup',
          entryPath: './src/wizard/popup/wizard-popup.ts',
        },
        {
          entryName: 'devtools',
          entryPath: './src/devtools/index.ts',
        },
      ],
      styles: ['./src/wizard/popup/wizard-popup.scss', 'packages/shared/status-bar/src/lib/status-bar.scss'],
      extractCss: true,
      generateIndexHtml: false,
      outputHashing: 'none',
      optimization: process.env['NODE_ENV'] === 'production',
      vendorChunk: false,
      extractLicenses: process.env['NODE_ENV'] === 'production',
      sourceMap: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: `**/messages.json`, to: './_locales', context: `../../apps/acf-i18n/src/assets/locales` },
        { from: path.join(__dirname, 'assets', process.env.VITE_PUBLIC_VARIANT), to: './assets' },
        { from: `./*.html`, to: './html', context: 'src/wizard/popup' },
        { from: `./*.html`, to: './', context: 'src/devtools' },
        { from: `./*.html`, to: './html', context: '../../packages/shared/sandbox/src/lib' },
        { from: path.join(__dirname, '../../node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js'), to: './webcomponents' },
        {
          from: './src/manifest.json',
          to: './manifest.json',
          transform(content) {
            return modify(content, process.env);
          },
        },
      ],
    }),
    new Dotenv({
      path: './.env',
      systemvars: true,
    }),
    new BannerPlugin(fs.readFileSync('./LICENSE', 'utf8')),
  ],
};
