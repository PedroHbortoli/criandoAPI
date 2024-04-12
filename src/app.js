const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.set("port", process.env.PORT || 3003);

module.exports = app;