

 const newsData = () => {
    let nsData = []
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("https://newsdata.io/api/1/latest?apikey=pub_605560fbd0bc4869d03f73843c0ed8620b3a9&category=technology&language=ru", requestOptions)
        .then((response) => response.json())
        .then((result) => nsData.push(result))
        .catch((error) => console.error(error));
    console.log(nsData)

}

exports.newsData = newsData
