const newsItem = document.getElementById("news_item");
const newsTitle = document.getElementById("item_title").innerText;
const newsText = document.getElementById("item_text").innerText;
console.log(newsItem, newsTitle);

async function getDateNews() {
  await fetch("/news", {
    method: "GET",
  })
    .then((response) => response)
    .then((result) => console.log(result));
}

getDateNews()
  .then((response) => response)
  .then((result) => console.log(result));
