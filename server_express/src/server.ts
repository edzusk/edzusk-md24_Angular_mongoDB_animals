import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import Animal from "./types/Animal";

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/animals");
}

const animalSchema = new mongoose.Schema({
  breed: { type: String, required: true },
  species: { type: String, required: true },
});

const Animal = mongoose.model("Animal", animalSchema);

app.get("/animals/species/:species", async (req: Request, res: Response) => {
  const species = req.params.species;
  if (species === "all") {
    const animals = await Animal.find({});
    res.json(animals);
  } else {
    const animals = await Animal.find({ species: species });
    res.json(animals);
  }
});

app.post(
  "/animals",
  async (req: Request<undefined, undefined, Animal>, res: Response) => {
    const animal = req.body;
    const result = await Animal.create(animal);
    res.send(result);
  }
);

app.delete("/animals/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await Animal.deleteOne({ _id: id });
  res.send(result);
});

app.put("/animals/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const animal = req.body;
  const result = await Animal.updateOne({ _id: id }, animal);
  res.send(result);
});
