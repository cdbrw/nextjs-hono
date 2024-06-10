import { Hono } from "hono";
import { handle } from "hono/vercel";
import postsRouter from "./posts";

export const runtime = "edge";

const api = new Hono().basePath("/api");

api.route("/posts", postsRouter);

export const GET = handle(api);
export const POST = handle(api);
