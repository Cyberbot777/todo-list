import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let todos = [
  { label: "Sample Task", done: false }
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.put("/todos", (req, res) => {
  todos = req.body;
  res.json({ msg: "Todos updated", todos });
});

app.delete("/todos", (req, res) => {
  todos = [];
  res.json({ msg: "All todos deleted" });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
