
let nsData = []
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://newsdata.io/api/1/latest?apikey=pub_605560fbd0bc4869d03f73843c0ed8620b3a9&category=technology&language=ru',
  headers: { }
};

axios.request(config)
.then((response) => {
  nsData.push(parseNews(response.data));
  logData()
  renderNews(nsData)
})
.catch((error) => {
  console.log(error);
});



function logData() {
  console.log(nsData)
}

function renderNews(data){

  const newsItem = document.getElementById('news_item')
  const newsTitle = document.getElementById('item_title')
  const newsText = document.getElementById('item_text')
  console.log(newsItem, newsTitle.textContent, data)

}
function parseNews(data) {

  
  const {results} = data 
  return results.map((v) => {
    return {title: v.title, description: v.description}
  })
}

