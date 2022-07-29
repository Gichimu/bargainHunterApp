const express = require('express');

const path = require("path");

const cors = require('cors');

const PORT = process.env.PORT || 3000;

const route = require('./scraper');

const app = express()

app.use(express.static(path.join(__dirname, "./public")));

// cors
app.use(cors());
app.options('*', cors());

// middleware
app.use(express.json());

// add route middleware
app.use('/api', route);

app.listen(PORT, () => { console.log("Server running on port 3000")})