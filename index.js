// var createError = require("http-errors");
import createHttpError from "http-errors";
// var express = require("express");
import express from "express";
// var path = require("path");
import * as path from "path";
// var cookieParser = require("cookie-parser");
import cookieParser from "cookie-parser";
// var logger = require("morgan");
import logger from "morgan";
// var http = require("http");
import http from "http";
import { config } from "dotenv";
config();

import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URL);
const __dirname = path.resolve();

// Routes
// var indexRouter = require("./app/routes/index");
// var usersRouter = require("./app/routes/users");
import indexRouter from "./app/routes/index.js";

export var app = express();
// view engine setup
app.set("views", path.join(__dirname, "/app/views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createHttpError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

var port = process.env.PORT || 3000;
app.set("port", port);
var server = http.createServer(app);

server.listen(port);
