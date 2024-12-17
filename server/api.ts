import { Hono } from 'hono';

const health = new Hono().get('/health', (c) =>
  c.json({ message: 'Hello from the server!' })
);

export default health;
