import express from "express";
import knex from "knex";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../app")));

const db = knex({
  client: "sqlite3",
  connection: { filename: "./database.db" },
  useNullAsDefault: true,
});

app.get("/cards", async function (request, response) {
  try {
    const cards = await db("cards").select("*");
    response.json(cards);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

const server = app.listen(3000, () => {
  console.log("App running on http://localhost:3000.");
});

server.on("error", (error) => {
  console.error("Server error:", error.message);
});
