const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
});

server.post("/:id", (req, res) => {
});

server.delete("/:id", (req, res) => {
});

server.put("/:id", (req, res) => {
});

module.exports = server;
