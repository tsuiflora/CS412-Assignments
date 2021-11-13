const express = require('express');
const router = express.Router();

//const fetch = require('node-fetch');

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
const existsAsync = promisify(client.exists).bind(client);
const setAsync = promisify(client.set).bind(client);
const expireAsync = promisify(client.expire).bind(client);


client.flushdb((err, success) => {
  if (err) {
    throw new Error(err)
  }
});

router.post('/bored', async (req, res, next) => {
  let ppl = req.body.people;
  //console.log(ppl);
  if (await existsAsync(ppl)) {
    let peopleData = await getAsync(ppl);
    let response = {
      peopleData: peopleData,
      cached: true
    }
    res.send(response);

  } else {
    let returnValueRaw = await fetch('http://www.boredapi.com/api/activity?participants=' + req.body.people);
//       let cityData = await returnValueRaw;
    let peopleData = await returnValueRaw.json();
    await setAsync(people, JSON.stringify(peopleData));
    let response = {
      peopleData: peopleData,
      cached: false
    }
    await expireAsync(people, 15);
    res.send(response)

router.get('/', function (req, res, next) {
  res.render('index')
});

module.exports = router;
