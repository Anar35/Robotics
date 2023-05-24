const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

//robots schema
const RobotsSchema = new mongoose.Schema({
  name: String,
  desc: String,
  price: Number,
  imageURL: String,
});
//robots model
const RobotsModel = new mongoose.model("Robots", RobotsSchema);

//get all
app.get("/api/robots", async (req, res) => {
  const { name } = req.query;
  const robots = await RobotsModel.find();
  if (!name) {
    res.status(200).send(robots);
  } else {
    res
      .status(200)
      .send(
        robots.filter((x) =>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        )
      );
  }
});

//get by ID
app.get("/api/robots/:id", async (req, res) => {
  const { id } = req.params;
  const robot = await RobotsModel.findById(id);
  if (id) {
    res.status(200).send(robot);
  } else {
    res.status(204).send("Data not found");
  }
});

//delete
app.delete("/api/robots/:id", async (req, res) => {
  const { id } = req.params;
  await RobotsModel.findByIdAndDelete(id);
  res.status(203).send({ massage: "deleted:/" });
});

//edit
app.put("/api/robots/:id", async (req, res) => {
  const { id } = req.params;
  const { name, desc, price, imageURL } = req.body;
  const updatedRobot = {
    name: name,
    desc: desc,
    price: price,
    imageURL: imageURL,
  };
  await RobotsModel.findByIdAndUpdate(id, updatedRobot);
  res.status(200).send({ massage: "updated:}" });
});

//post
app.post("/api/robots", async (req, res) => {
  const { name, desc, price, imageURL } = req.body;
  const addedRobot = new RobotsModel({
    name: name,
    desc: desc,
    price: price,
    imageURL: imageURL,
  });
  await addedRobot.save();
  res.status(201).send({ massage: "posted:)" });
});

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server: İşliyirəm");
});

DB_PASSWORD = process.env.DB_PASSWORD;
DB_CONNECTION = process.env.DB_CONNECTION;
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
  console.log("MongoDB: Məndə İşliyirəm");
});
