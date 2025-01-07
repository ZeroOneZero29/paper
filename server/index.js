const express = require("express");
const puppeter = require("puppeteer");
const app = express();
const moment = require("moment");
const cors = require("cors")
const print = require("pdf-to-printer")
const newsDate = require("./public/js/backend/news_date");
moment.locale("ru");
app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.use(cors())


print.getPrinters().then((date) => console.log(date))


app.get("/date", function (req, res) {
  const todayDay = moment().date();
  const todayMonth = moment().month();
  const data = {
    day: todayDay,
    mounth: todayMonth,
  };
  res.send(data);
});

app.get("/news", function (req, res) {
  const dateNews = newsDate.AxiosDate().then((result) => result).then(ress => res.send(ress));
  console.log(dateNews)
  
});


app.listen(5000, () => {
  console.log(5000);
});

app.get("/", function (req, res) {
  res.render("index");``
});


async function pdf() {
  const browser = await puppeter.launch();
  const page = await browser.newPage();

  const website_url = "http://localhost:3000/";
  await page.goto(website_url, { waitUntil: "networkidle0" });
  await page.emulateMediaType("screen");

  const pdf = await page.pdf({
    path: "./public/pdf/result.pdf",
    margin: { top: "0px", right: "0px", left: "0px", bottom: "0px" },
    format: "A4",
  });
  await browser.close();
}


const options = {
  printer: "HP91AE40 (HP Smart Tank 580-590 series)",
  scale: "noscale"
}
//print.print("./public/pdf/result.pdf", options).then((res) => console.log(res)).catch((er) => console.log(er))




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
