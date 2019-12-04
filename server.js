// server.js
require('dotenv').config({ path: 'variables.env' });
const _ = require('underscore');

let data = [];
let subscriptions = [];

var _data = require('./sampleData.json');

data.push({updateTime : new Date(),event : "POI", data : _data});

const express = require('express');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');




const app = express();

var cors = require('cors')
app.use(cors())

var morgan = require('morgan')
app.use(morgan('development'));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client')));

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webPush.setVapidDetails('mailto:test@example.com', publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) => {
  const subscription = req.body

  res.status(201).json({});

  const payload = JSON.stringify({
    title: 'Push notifications with Service Workers',
  });

  subscriptions.push(subscription);

  webPush.sendNotification(subscription, payload)
    .catch(error => console.error(error));
});

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/hello',(req, res) => {
    res.send('hello there : ' + new Date());
});

app.put('/update',(req, res) => {
    let pushedData = {updateTime : new Date(),event : req.body.event, data : req.body};
    data.push(pushedData);
    res.status(200).json({"status" : "ok"});

    subscriptions.forEach(sub=>{
        webPush.sendNotification(sub, pushedData)
        .catch(error => console.error(error));
    });
});

app.get('/data',(req, res) => {
    res.status(200).json(data);
});