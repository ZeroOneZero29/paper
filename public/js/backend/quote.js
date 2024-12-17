const axios = require("axios");
const cheerio = require("cheerio");

const URL =
  "https://www.leadertask.ru/blog/150-motiviruyushhix-citat-na-kazhdyj-den";
let quote = [];

const { data } = axios.get(URL).then((response) => {
  const $ = cheerio.load(response.data);
  const $p = $("p");
  console.log($p.children[50]);
  for (let obj of $p) {
    if (obj.children[0].next && obj.children[0].next.children) {
      try {
        quote.push(returnString(obj.children[0]));
      } catch (e) {}
    }
  }
  console.log(quote.length);
});

function returnString(elem) {
  return `${elem.data}${elem.next.children[0].data}`;
}

//const {res} = await getQuote().then(res => res.text())
//getQuote().then((result) => {
//    const quote = []
//    quote.push(result)          <div class="weater_card">
