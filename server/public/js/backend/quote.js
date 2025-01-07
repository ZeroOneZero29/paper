const axios = require("axios");
const cheerio = require("cheerio");

const URL =
  "https://www.leadertask.ru/blog/150-motiviruyushhix-citat-na-kazhdyj-den";
let quote = [];

const { data } = axios.get(URL).then((response) => {
  const $ = cheerio.load(response.data);
  const $p = $("p");
  //console.log($p[48].children[0].next.children)
  for (let test of $p) {
    if (test.children[0] && test.children[0].data !== undefined){
      //quote.push(returnString(test.children[0]));
      console.log(test.children[0].next.children[0])
      if (!test.children[0]) {
        break
      }
    }
  }
  //for (let obj of $p) {
  //  if (obj.children[0].next && obj.children[0].next.children & test.children[0].data !== undefined) {
  //    if (!test.children[0]) {
  //      try {
  //        quote.push(returnString(obj.children[0]));
  //      } catch{


  //      }
  //      break
  //    }

  //  }
  //}
  console.log(quote.length);
});

function returnString(elem) {
  return `${elem.data}${elem.next.children[0].data}`;
}

//const {res} = await getQuote().then(res => res.text())
//getQuote().then((result) => {
//    const quote = []
//    quote.push(result)          <div class="weater_card">
