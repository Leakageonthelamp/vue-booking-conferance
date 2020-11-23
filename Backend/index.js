const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const { check, validationResult } = require("express-validator");
const server = express();
const PORT = 3000;

// Setting Parser
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
//setting session
server.use(
  expressSession({
    secret: "love me love my cat",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);

server.get("/session", (req, res) => {
  req.session.item = "hellowwwwww";
  res.end("set session");
});

server.post(
  "/",
  [check("firstname").not().isEmpty(), check("lastname").not().isEmpty()],
  (req, res) => {
    try {
      validationResult(req).throw();
      res.json(req.body);
    } catch (error) {
      res.status(400).json({ error: "Validation fail" });
    }
  }
);

server.get("*", (req, res) => {
  res.end(`<h1>Backend server running.</h1>`);
});

server.listen(PORT, () => console.log(`server is starting at port ${PORT}.`));
