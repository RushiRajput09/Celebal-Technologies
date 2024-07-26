const express = require('express');
const axios = require('axios');

const router = express.Router();

const apiKey = process.env.OPENWEATHERMAP_API_KEY;

router.get('/:city', async (req, res) => {
  const city = req.params.city;
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching weather data' });
  }
});

module.exports = router;
