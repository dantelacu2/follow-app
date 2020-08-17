require('dotenv').config();

const fs = require('fs');
const join = require('path').join;
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const port = process.env.PORT || 3000;

const app = express();

function listen() {
  app.listen(port);
  console.log('Express app started on port ' + port);
}
