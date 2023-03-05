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

app.get(
  "/animals/species/:species",
  async ({ params }: Request, res: Response) => {
    try {
      const animalsTofind =
        params.species === "all" ? {} : { species: params.species };
      const animals = await Animal.find(animalsTofind);
      res.status(200).json(animals);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

app.post(
  "/animals",
  async ({ body }: Request<undefined, undefined, Animal>, res: Response) => {
    try {
      const result = await Animal.create(body);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

app.delete("/animals/:id", async ({ params }: Request, res: Response) => {
  try {
    const result = await Animal.deleteOne({ _id: params.id });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.put("/animals/:id", async ({ params, body }: Request, res: Response) => {
  try {
    const result = await Animal.updateOne({ _id: params.id }, body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
