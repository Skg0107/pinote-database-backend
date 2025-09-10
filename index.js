import express from "express";
import cors from "cors";
import { connectDB } from "./config/dbConnect.js";
import postRoutes from "./Routes/postRoutes.js";

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/post", postRoutes);

app.get("/", (req, res) => {
  res.status(200).send("pinote-database-backend running successfully");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(5005, () => {
  console.log("pinote database backend is listening on http://localhost:5005");
});
