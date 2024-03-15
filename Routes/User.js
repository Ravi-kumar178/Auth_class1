const express = require("express");
const route = express.Router();

//import controller
const {signup} = require("../Controller/Auth");

route.post("/signup",signup);

module.exports = route;