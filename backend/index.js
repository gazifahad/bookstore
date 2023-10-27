import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/BookModel.js";
import booksRoute from "./routes/booksRoute.js";
const app = express();
app.use(express.json());

// use cors middlewire for server safety from unauthorized request
// this will allow every origin request
app.use(cors());
// allow custom origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.use("/books", booksRoute);
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome here");
});

mongoose
  .connect(mongoDBURL)
  .then((result) => {
    console.log("app connected succesfully");
    app.listen(PORT, () => {
      console.log(`app is running in portb No: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
