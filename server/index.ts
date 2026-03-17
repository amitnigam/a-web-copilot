import express from "express";
import { createServer } from "http";
import fs from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Resolve static path for both bundled runtime (/dist/public)
  // and source runtime (/../dist/public)
  const bundledStaticPath = path.resolve(__dirname, "public");
  const sourceStaticPath = path.resolve(__dirname, "..", "dist", "public");
  const staticPath = fs.existsSync(bundledStaticPath) ? bundledStaticPath : sourceStaticPath;

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = Number(process.env.PORT) || 8080;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
