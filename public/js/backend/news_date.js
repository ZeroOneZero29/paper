const axios = require("axios");

let config = {
  method: "get",
  maxBodyLength: Infinity,
  //url: "https://newsdata.io/api/1/latest?apikey=pub_605560fbd0bc4869d03f73843c0ed8620b3a9&category=technology&language=ru",
  headers: {},
};

async function AxiosDate() {
  const response = await axios.request(config);
  return parseNews(response.data);
}

function parseNews(data) {
  const { results } = data;
  return results.map((v) => {
    return { title: v.title, description: v.description };
  });
}
module.exports.AxiosDate = AxiosDate;
