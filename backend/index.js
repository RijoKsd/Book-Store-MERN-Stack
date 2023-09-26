import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

//  Middleware for books routes
app.use("books", booksRoute);

// Middleware for CORS
app.use(cors());

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
