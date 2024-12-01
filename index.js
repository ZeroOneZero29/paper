const news = require('./news.js')
const quote = require('./quote.js')




//const getData = async() => {
//try{
//    const { data } = await axios.get('https://www.capsolver.com/ru/blog/The-other-captcha/web-scraping-with-cheerio-ru');
//    const $ = cheerio.load(data)

//    $('h2').each((index, element) => {
//        heading.push($(element).text())
//    })

//    for(let i=0; i<heading.length; i++){
//        console.log(i, heading[i])

//    }
//}
//catch(e) {
//    console.log(e);
//}
//}

//getData(); 


//let html = ejs.render('<%= heading.join(", ");%>', {heading:heading})