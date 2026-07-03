// سرور فایل استاتیک بسیار سبک برای نمایش خروجی export شده (پوشه‌ی out/).
// مصرف حافظه‌ی بسیار کم — مناسب سیستم‌های با رم محدود.
// اجرا: node serve-static.mjs   (پیش‌فرض روی پورت 3000)
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize } from "node:path";

const ROOT = join(process.cwd(), "out");
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".txt": "text/plain; charset=utf-8",
};

async function resolveFile(urlPath) {
  // مسیر امن (جلوگیری از خروج از ROOT)
  const clean = normalize(decodeURIComponent(urlPath.split("?")[0])).replace(
    /^(\.\.[/\\])+/,
    ""
  );
  const candidates = [
    join(ROOT, clean),
    join(ROOT, clean, "index.html"),
    join(ROOT, clean + ".html"),
  ];
  for (const c of candidates) {
    try {
      const s = await stat(c);
      if (s.isFile()) return c;
    } catch {
      /* try next */
    }
  }
  return null;
}

const server = createServer(async (req, res) => {
  try {
    let file = await resolveFile(req.url || "/");
    if (!file) {
      // fallback به صفحه 404 خود Next یا index
      file = (await resolveFile("/404")) || (await resolveFile("/"));
      if (!file) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("404 Not Found");
        return;
      }
      res.writeHead(404, { "Content-Type": MIME[".html"] });
    } else {
      res.writeHead(200, { "Content-Type": MIME[extname(file)] || "application/octet-stream" });
    }
    const data = await readFile(file);
    res.end(data);
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("500 Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Static server running: http://localhost:${PORT}  (serving ./out)`);
});
