// server.js
require("dotenv").config({ path: "variables.env" });
const _ = require("underscore");

let data = [];
let subscriptions = [];

var _data = require("./sampleData.json");

data.push({ updateTime: new Date(), event: "POI", data: _data });

const express = require("express");
const webPush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const https = require("https");
const fs = require("fs");

var key = fs.readFileSync(__dirname + "/selfsigned.key");
var cert = fs.readFileSync(__dirname + "/selfsigned.crt");
var options = {
  key: key,
  cert: cert
};

const app = express();

var cors = require("cors");
app.use(cors());

var morgan = require("morgan");
app.use(morgan("dev"));


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client")));

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webPush.setVapidDetails(
  "mailto:test@example.com",
  publicVapidKey,
  privateVapidKey
);

app.post("/subscribe", (req, res) => {
  console.log("SUBSCRIBE");
  const subscription = req.body;

  res.status(201).json({});

  const payload = JSON.stringify({
    title: "Push notifications with Service Workers"
  });

  subscriptions.push(subscription);

  webPush
    .sendNotification(subscription, payload)
    .catch(error => console.error(error));
});

app.set("port", process.env.PORT || 5000);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.get("/hello", (req, res) => {
  console.log("hello was called");
  res.send("hello there : " + new Date());
});

app.put("/update", (req, res) => {
  console.log('UPDATE');
  console.log(JSON.stringify(req.body));
  //console.log("got update request with body : " + JSON.stringify(req.body));
  let pushedData = {
    updateTime: new Date(),
    event: req.body.event,
    data: req.body
  };
  data.push(pushedData);
  res.status(200).json({ status: "ok" });

  subscriptions.forEach(sub => {
    webPush
      .sendNotification(sub, JSON.stringify(pushedData))
      .catch(error => console.error(error));
  });
});

app.get("/data", (req, res) => {
  res.status(200).json(data);
});

var httpsServer = https.createServer(options, app);
httpsServer.listen(5002, () => {
  console.log("server starting on port : " + 5002);
});
