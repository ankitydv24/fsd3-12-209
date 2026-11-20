import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();

const urlPath = fileURLToPath(import.meta.url);
const rootfolder = path.dirname(urlPath);

app.use(express.static(path.join(rootfolder, "pages")));

app.use((req, res) => {
  res.status(404).send("<h1>page not found</h1>");
});

app.listen(4444, () => {
  console.log("Server is running on port 4444");
});

