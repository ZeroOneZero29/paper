import { useEffect, useState } from 'react';
import '../css/Quote.css';




export default function Quote() {

  const [quote, setQuote] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/quote', {
      method: "GET"
    })
    .then(response => response.json())
    .then(result => setQuote(result))
    .catch(error => console.log(error))
  }, [])

  console.log(quote[50]);
  

  



  return(
    <div className="quote">
    <div className="quote-container">
      <p className="quote_text">
      «{quote[51].text}»
      </p>
      <p className="quote_autor">{quote[52].autor}</p>
    </div>
  </div>
  )
}
