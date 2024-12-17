
let nsData = []

const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("https://newsdata.io/api/1/latest?apikey=pub_605560fbd0bc4869d03f73843c0ed8620b3a9&category=technology&language=ru", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));




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

