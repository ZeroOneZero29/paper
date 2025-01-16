const { useState, useEffect, useRef } = require("react");

export default function NewsBusiness() {
  const myEl = useRef();
  const newsContainer = useRef();
  const newsContainerCurent = newsContainer.current;

  const [elements, setElements] = useState();
  const [news, setNews] = useState([]);

    useEffect(() => {
      fetch("http://127.0.0.1:5000/news/business", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((result) => setNews(result))
        .catch((error) => console.log(error));
    }, []);

    console.log(elements)
    
    useEffect(() => {
        setElements(newsContainerCurent);
        //console.log(elements);

        console.log(samNewArr);
        
        if (elements !== undefined) {
          CheckEl(elements.children[1].children);
        }
      });
    
      let newResArr = news.map((obj, index) => ({ ...obj, id: index }));
    
      function chekArr(el) {
        if (
          el.title !== "..." &&
          el.description !== "..." &&
          el.title !== null &&
          el.description !== null &&
          el.title !== "" &&
          el.description !== ""
        ) {
          samNewArr.push(el);
        }
      }
    
      let samNewArr = [];

      
      samNewArr.splice(1,3)
      newResArr.map((obj) => chekArr(obj));
    
      const listItems = samNewArr.map((date) => (
        <div id="news_item" key={date.id} className="news_item" ref={myEl}>
          <p id="item_title" className="item_title">
            {date.title}
          </p>
          <p id="item_text" className="item_text">
            {date.description}
          </p>
        </div>
      ));
    
    
      function CheckEl(e) {
        console.log(e);
        const cyrillicPattern = /[а-яА-ЯЁё]/;
        for (let i = 0; i < e.length; i++) {
          if (e[i].offsetTop + e[i].offsetHeight > 1650) {
            e[i].style.display = "none";
          }
          if (!cyrillicPattern.test(e[i].innerText)) {
            e[i].style.display = "none";
          }
          if (e[i].offsetHeight > 150) {
            e[i].style.display = "none";
          }
          //console.log(cyrillicPattern.test(e[i].innerText));
          //console.log(e[i].innerText);
        }
      }
    
    
    
    
      return (
        <div className="news">
          <div className="news-container" ref={newsContainer}>
            <p className="news_title news_title_econom">Новости Экономики</p>
            <div id="news-block" className="news-block">
              {listItems}
            </div>
          </div>
          <p className="prod_by">prod. by Zhigadlov</p>
        </div>
      );
    
}

