// server.ts
import { Hono } from 'hono';

import { serveStatic } from '@hono/node-server/serve-static';
import { readFile } from 'node:fs/promises';
// import health from './api';

import health from './api';
import postgres from 'postgres';

const isProd = process.env['NODE_ENV'] === 'production';
let html = await readFile(isProd ? 'build/index.html' : 'index.html', 'utf8');

if (!isProd) {
  // Inject Vite client code to the HTML
  html = html.replace(
    '<head>',
    `<script type="module">
        import RefreshRuntime from "/@react-refresh"
        RefreshRuntime.injectIntoGlobalHook(window)
        window.$RefreshReg$ = () => {}
        window.$RefreshSig$ = () => (type) => type
        window.__vite_plugin_react_preamble_installed__ = true
    </script>
    <script type="module" src="/@vite/client"></script>
    `
  );
}

const sql = postgres({
  host: 'localhost',
  port: 5432,
  database: 'product_reviews',
});

const sqlSelect = sql`SELECT name FROM public.categories ORDER BY category_id ASC`;
const sqlJoin = sql`SELECT products.product_id, products.name, product_reviews.rating 
FROM products, product_reviews`;

const app = new Hono();
app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404));

app.get('/', async (c) => {
  const result = await sqlJoin;
  console.log(result);
  return c.text('Hello!');
});

app.route('/health', health);

app.get('/*', (c) => c.html(html));
export default app;
export type AppType = typeof app;

if (isProd) {
  app.use('*', serveStatic({ root: 'build/' }));
}
