const axios = require("axios");

const geocode = async (address) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: address },
    headers: {
      "X-RapidAPI-Key": "51f919484dmsh1025f8582815105p152442jsn758463367543",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    const data = {
      condition: response.data.current.condition.text,
      temp: response.data.current.temp_c,
      wind: response.data.current.wind_mph,
      winddir: response.data.current.wind_dir,
      pressure: response.data.current.pressure_mb,
      name: response.data.location.name,
      region: response.data.location.region,
      country: response.data.location.country,
    };
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = geocode;
