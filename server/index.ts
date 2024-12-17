// api/index.ts
import { Hono } from 'hono';
import health from './api';

// Always register routes in an index.ts file.
// Must use chaining syntax, otherwise `hc` will lose types.
const api = new Hono().route('/health', health);

export default api;
