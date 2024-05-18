const express = require("express");
const app = express();
const cors = require("cors");
require("./src/db/database");
require("./src/model/schema");
const cookieParser = require("cookie-parser")
require("dotenv").config();


app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./src/router/router"));

app.listen(8000);
