import { useEffect, useState } from "react";
import "../css/Quote.css";

export default function Quote() {
  const [quote, setQuote] = useState([]);
  const [ready, isReady] = useState();
  const [lengthArr, setLength] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/quote", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => getDate(result))
      .catch((error) => console.log(error));
  }, []);

  function getDate(res) {
    setQuote(res);
    setLength(res.length);
    isReady(true);
  }

  function numIndex(len) {
    const min = 0;
    const indexArr = Math.floor(Math.random() * (len - min + 1)) + min;
    console.log(indexArr);
    return indexArr;
  }

  let arrIndex = numIndex(lengthArr);

  if (ready) {
    return (
      <div className="quote">
        <div className="quote-container">
          <p className="quote_text">«{quote[arrIndex].text}»</p>
          <p className="quote_autor">{quote[arrIndex].autor}</p>
        </div>
      </div>
    );
  }
}
