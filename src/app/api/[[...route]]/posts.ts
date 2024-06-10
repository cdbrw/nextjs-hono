import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
  // query the database for blog posts
  return c.json({ posts: [] });
});

export default app;
