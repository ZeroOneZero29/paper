const axios = require('axios');
const cheerio = require("cheerio");

const URL = 'https://www.leadertask.ru/blog/150-motiviruyushhix-citat-na-kazhdyj-den'
const quote = []

const getQuote = async function () {
    try{
        const {data} = await axios.get(URL)
        const $ = cheerio.load(data)
        resolve($)
    }
    catch(e){
        console.error(e)
    }
}


const {res} = await getQuote().then(res => res.text())
//getQuote().then((result) => {
//    const quote = []
//    quote.push(result)
//    console.log(quote);
//})


console.log(res)







