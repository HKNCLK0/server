import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Server");
});

app.listen(() => console.log("Server Starded"));
