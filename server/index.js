const express = require("express");
const puppeter = require("puppeteer");
const app = express();
const moment = require("moment");
const cors = require("cors")
const print = require("pdf-to-printer")
const bodyParser = require('body-parser');
const cron = require('node-cron')

moment.locale("ru");
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use(cors())

const newsDate = require("./public/js/backend/news_date");
const newsQuote = require("./public/js/backend/quoteNew")
const weather = require("./public/js/backend/weather")

//console.log(weather.WeatherDate().then(res => console.log(res)))

const time =  new Date().toJSON().replace(new RegExp(':', 'g'),'.');
let timestamp = time.slice(0,10).toString()
console.log(timestamp); 


app.get("/quote", function(req, res) {
  const quoteData = newsQuote.getDate.then(result => res.send(result))

})


//print.getPrinters().then((date) => console.log(date))


app.get("/date", function (req, res) {
  const todayDay = moment().date();
  const todayMonth = moment().month();
  const data = {
    day: todayDay,
    mounth: todayMonth,
  };
  res.send(data);
});

app.get("/weather", function(req, res) {
  const dataWeather = weather.WeatherDate.then(result => res.send(result))
  console.log(dataWeather);
  
})

app.get("/news", function (req, res) {
  const dataNews = newsDate.AxiosDate().then((result) => result).then(ress => res.send(ress));
  console.log(dataNews)
  
});


app.listen(5000, () => {
  console.log(5000);
});

app.get("/", function (req, res) {
  res.render("index");
});

//app.post("/print", function(req, res) {
//  //console.log(req.body);
//  //console.log('Отправка запроса на печать');
//  console.log(`${JSON.stringify(req.body)}`)
//  res.sendStatus(200);

// })



async function pdf(time) {
  const browser = await puppeter.launch();
  const page = await browser.newPage();

  const website_url = "http://localhost:3000/";
  await page.goto(website_url, { waitUntil: "networkidle0" });
  await page.emulateMediaType("screen");

  const pdf = await page.pdf({
    path: `./public/pdf/${time}.pdf`,
    margin: { top: "0px", right: "0px", left: "0px", bottom: "0px" },
    format: "A4",
  });
  await browser.close();
}



//function postFunc(time) {

//  console.log('EBAT TVOI ROT' + time);
//}
const options = {
  printer: "HP91AE40 (HP Smart Tank 580-590 series)",
  scale: "noscale"
}
//setTimeout(() => {
//  print.print(`./public/pdf/${timestamp}.pdf`, options).then((res) => console.log(res)).catch((er) => console.log(er))
//}, 10000);
//print.print(`./public/pdf/${timestamp}.pdf`, options).then((res) => console.log(res)).catch((er) => console.log(er))

cron.schedule('00 23 * * *', () => {
  console.log('crone');
  pdf(timestamp)
  setTimeout(() => {
    console.log('ten ten ten');
    print.print(`./public/pdf/${timestamp}.pdf`, options).then((res) => console.log(res)).catch((er) => console.log(er))
  }, 30000);
})





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
