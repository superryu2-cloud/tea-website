/* global __dirname */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// 開發模式專用：後台一鍵同步商品到 productData.js
function productSyncPlugin() {
  return {
    name: 'product-sync',
    configureServer(server) {
      server.middlewares.use('/__sync-products', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method not allowed');
          return;
        }

        let body = '';
        req.on('data', (chunk) => { body += chunk; });
        req.on('end', () => {
          try {
            const { products, displayPages } = JSON.parse(body);
            const filePath = path.resolve(__dirname, 'src/data/productData.js');
            let content = fs.readFileSync(filePath, 'utf-8');

            // 替換 DEFAULT_PRODUCTS
            if (products) {
              const productsCode = JSON.stringify(products, null, 4);
              content = content.replace(
                /const DEFAULT_PRODUCTS\s*=\s*\[[\s\S]*?\n\];/,
                `const DEFAULT_PRODUCTS = ${productsCode};`
              );
            }

            // 替換 DEFAULT_DISPLAY_PAGES
            if (displayPages) {
              const displayCode = JSON.stringify(displayPages);
              content = content.replace(
                /const DEFAULT_DISPLAY_PAGES\s*=\s*\[.*?\];/,
                `const DEFAULT_DISPLAY_PAGES = ${displayCode};`
              );
            }

            fs.writeFileSync(filePath, content, 'utf-8');
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: true }));
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ ok: false, error: err.message }));
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), productSyncPlugin()],
})
