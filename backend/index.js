import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();


app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello World");
});

// MongoDB connection and server start
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("MongoDB successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
