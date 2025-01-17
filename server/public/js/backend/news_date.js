const axios = require("axios");

let config = {
  method: "get",
  maxBodyLength: Infinity,

  url: "https://newsdata.io/api/1/latest?apikey=pub_6457648ac306c39e1085e4bb853f85fdb2718&category=technology&language=ru",

  //url: "https://newsdata.io/api/1/latest?apikey=pub_6457750337719d4e54a3f552ccad4d7ebbd91&category=technology&language=ru",

  //url: "https://newsdata.io/api/1/latest?apikey=pub_641468c33553d5cb7320585d226ee93b9af79&category=technology&language=ru",

  headers: {},
};

let configbusiness = {
  method: "get",
  maxBodyLength: Infinity,

  url: "https://newsdata.io/api/1/latest?apikey=pub_6457648ac306c39e1085e4bb853f85fdb2718&category=business&language=ru",

  //url: "https://newsdata.io/api/1/latest?apikey=pub_6457750337719d4e54a3f552ccad4d7ebbd91&category=business&language=ru",

  //url: "https://newsdata.io/api/1/latest?apikey=pub_641468c33553d5cb7320585d226ee93b9af79&category=business&language=ru",

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


async function getBusinessNews() {
  const response = await axios.request(configbusiness)
  return parseNews(response.data)
}
module.exports.AxiosDate = AxiosDate;
module.exports.getBusinessNews = getBusinessNews;