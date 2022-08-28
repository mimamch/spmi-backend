// var createError = require("http-errors");
import createHttpError from "http-errors";
// var express = require("express");
import express from "express";
// var path = require("path");
import * as path from "path";
// var cookieParser = require("cookie-parser");
import cookieParser from "cookie-parser";
import session from "express-session";
import ConnectMongoDBSession from "connect-mongodb-session";
// var logger = require("morgan");
import logger from "morgan";
// var http = require("http");
import http from "http";
import { config } from "dotenv";
import cors from "cors";
config();

import mongoose from "mongoose";
const connect = mongoose.connect(process.env.MONGO_URL);
const __dirname = path.resolve();
const MongoDBStore = ConnectMongoDBSession(session);
var store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: "session",
});
store.on("error", function (error) {
  console.log("store error>>>>", error);
});

// Routes
import indexRouter from "./app/routes/index.js";
import grafikRouter from "./app/routes/grafik/index.js";

export var app = express();
// view engine setup
app.set("views", path.join(__dirname, "/app/views"));
app.set("view engine", "ejs");

var whitelist = [
  "http://192.168.5.9:3000",
  "http://192.168.5.9",
  "http://localhost:3000",
  "http://192.168.31.35:3000",
];
app.use(
  cors({
    credentials: true,
    // origin: function (origin, callback) {
    //   if (whitelist.indexOf(origin) !== -1) {
    //     callback(null, true);
    //   } else {
    //     callback(new Error("Not allowed by CORS"));
    //   }
    // },
    origin: function (origin, callback) {
      callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    store: store,
    saveUninitialized: true,
    secret: "iloveyou3000",
    resave: true,
    cookie: {
      sameSite: "none",
      secure: "auto",
      httpOnly: true,
    },
  })
);

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/grafik", grafikRouter);
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
