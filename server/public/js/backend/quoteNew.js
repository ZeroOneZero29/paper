const axios = require("axios");
const cheerio = require("cheerio");

let config = {
  method: "get",
  url: "https://www.leadertask.ru/blog/150-motiviruyushhix-citat-na-kazhdyj-den",
};
let quote = [];

async function getDate() {
  const response = await axios.request(config);
  const $ = cheerio.load(response.data);
  const $p = $("p");


  $p.each((index, el) => {

    const textSlice = $(el)
      .text()
      .slice($(el).text().indexOf(`“`) + 1, $(el).text().indexOf(`”`) - 1);
    const autor = $(el).children().text();


    let newQuoteObj = {
      index: index,
      text: textSlice,
      autor: autor,
    };

    if (newQuoteObj.autor !== "" && newQuoteObj.text !== "") {
      quote.push(newQuoteObj);
    }
  });
  quote.splice(0, 2);
  quote.splice(0, 1);
  quote.splice(143, 5);
  quote.splice(43, 1);
  quote.splice(87, 1);
  quote.splice(141, 1);
  return quote;

}

module.exports.getDate = getDate();


