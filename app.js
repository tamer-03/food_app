const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./api/routes/userRouter");
const addressRouter = require("./api/routes/addressRouter");
const categoryRouter = require("./api/routes/categoryRouter");
const likeRouter = require("./api/routes/likeRouter");
const authRouter = require("./api/routes/authRouter");
const productRouter = require("./api/routes/productRouter");
require("dotenv").config();
const statusEnum = require("./api/models/enum/statusEnum");

mongoose
  .connect(process.env.MONGO_URI.toString())
  .then(() => {
    console.log("connection succes");
    console.log(statusEnum.statusMessages.SUCCESS);
  })
  .catch((err) => {
    console.log("something wrong");
    console.log(err);
  });

app.use(express.json());
app.use("/users", userRouter);
app.use("/addresses", addressRouter);
app.use("/categories", categoryRouter);
app.use("/likes", likeRouter);
app.use("/auth", authRouter);
app.use("/products", productRouter);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
