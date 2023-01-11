require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const globalRouter = require("./const/router.const");

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.ploag4a.mongodb.net/test`;

const app = express();

app.use(express.json());
app.use("/api", globalRouter);

mongoose.set("strictQuery", true);

mongoose.connect(MONGO_URI, (error) => {
  if (error) return console.log(error);

  console.log("Connected to MongoDB");

  app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server is up at port: ${process.env.PORT}`);
  });
});
