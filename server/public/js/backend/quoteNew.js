const axios = require("axios");
const cheerio = require("cheerio");


let config = {
    method: "get",
    url:   "https://www.leadertask.ru/blog/150-motiviruyushhix-citat-na-kazhdyj-den"
}
let quote = [];

//const { data } = axios.get(URL).then((response) => {
//  const $ = cheerio.load(response.data);
//  const $p = $("p");


//    pushElement($p)
    

//  }
//)



async function getDate() {
    const response = await axios.request(config)
    const $ = cheerio.load(response.data);
    const $p = $("p")  

    //console.log($p.text());
    
   // console.log(typeof($p));
    

    $p.each((index, el) => {

      
      //const quoteObj = {
      //  index: index,
      //  text: $(el).text(),
      //  autor: $(el).children().text()
      //}  
      const textSlice = $(el).text().slice($(el).text().indexOf(`“`)+1, $(el).text().indexOf(`”`)-1)
      const autor = $(el).children().text()
      //let textSlice = quoteObj.text.slice(0, quoteObj.text.indexOf(``))

      
      let newQuoteObj = {
        index: index,
        text: textSlice,
        autor: autor
      }

      if (newQuoteObj.autor !== '' && newQuoteObj.text !== ''){
        quote.push(newQuoteObj)
      }

    })
    quote.splice(0,2)
    quote.splice(0,1)
    quote.splice(143,5)
    quote.splice(43,1)
    quote.splice(87,1)
    quote.splice(141,1)
    return quote
    //console.log(test.children().children().children().children().text());
    
}

//getDate().then((res) => console.log(res))
//getDate().then((res) => console.log(res))
module.exports.getDate = getDate();

//  for (let test of $p) {
//    if (test.children[0] && test.children[0].data !== undefined){
//      //quote.push(returnString(test.children[0]));
//      console.log(test.children[0].next.children[0])
//      if (!test.children[0]) {
//        break
//      }
//    }