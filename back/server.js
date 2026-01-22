import express from "express";
import cors from "cors";
import { connection } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contato", async (req, res) => {
  const { nome, email, mensagem } = req.body;

  try {
    await connection.execute(
      "INSERT INTO contato (nome, email, mensagem) VALUES (?, ?, ?)",
      [nome, email, mensagem]
    );

    res.status(201).json({ message: "Mensagem enviada com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
