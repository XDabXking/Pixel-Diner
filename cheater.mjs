// Netlify Function: remembers cheaters by IP address so a ban survives clearing browser data.
// GET  /api/cheater  -> { banned: true/false }
// POST /api/cheater  -> marks the caller's IP as banned
import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  const store = getStore("cheaters");
  const ip = context.ip || req.headers.get("x-nf-client-connection-ip") || "unknown";
  const key = "ip-" + ip.replace(/[^a-zA-Z0-9.:-]/g, "_");
  const headers = { "content-type": "application/json", "cache-control": "no-store" };

  if (req.method === "POST") {
    await store.set(key, String(Date.now()));
    return new Response(JSON.stringify({ banned: true }), { headers });
  }
  const hit = await store.get(key);
  return new Response(JSON.stringify({ banned: !!hit }), { headers });
};

export const config = { path: "/api/cheater" };
