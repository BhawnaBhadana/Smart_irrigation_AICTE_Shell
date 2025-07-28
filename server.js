const express = require('express');
const sensorCtl = require('./controllers/sensorController');
const app = express();
app.use(express.static('public'));

app.get('/status', async (_, res) => {
  const data = await sensorCtl.pollSensors();
  res.json(data);
});

const server = app.listen(3000);
