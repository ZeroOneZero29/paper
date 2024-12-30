let nsData = [];
const axios = require("axios");
const { PredefinedNetworkConditions } = require("puppeteer");

let config = {
  method: "get",
  maxBodyLength: Infinity,
  //url: "https://newsdata.io/api/1/latest?apikey=pub_605560fbd0bc4869d03f73843c0ed8620b3a9&category=technology&language=ru",
  headers: {},
};

const AxiosDate = async function () {
  await axios
    .request(config)
    .then((response) => {
      return response;
      //nsData.push(parseNews(response.data));
      //logData()
      //returnDate()
    })
    .catch((error) => {
      console.log(error);
    });
};

function parseNews(data) {
  const { results } = data;
  return results.map((v) => {
    return { title: v.title, description: v.description };
  });
}

function logData() {
  console.log("Передалось");
}

function returnDate() {
  return nsData;
}
module.exports = AxiosDate;

//function renderNews(data){

//  const newsItem = document.getElementById('news_item')
//  const newsTitle = document.getElementById('item_title')
//  const newsText = document.getElementById('item_text')
//  console.log(newsItem, newsTitle.textContent, data)

//}
