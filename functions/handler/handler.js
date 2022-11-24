const axios = require('axios');
const handler = async (event) => {
  const {lat, lon} = event.queryStringParameters || 'World'; 
  const API_KEY = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/onecall?units=imperial&exclude=minutely&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  try {
    let response = await axios.get(url)
    return {
      statusCode: 200,
      body: JSON.stringify( response.data ),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
module.exports = {handler}