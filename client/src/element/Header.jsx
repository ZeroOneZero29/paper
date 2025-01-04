import { useEffect, useState } from "react"
import '../css/Header.css';



export default function Header() {


  let mounth = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
    const [calendars, setCalendar] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/date", {
            method: "GET"
        })
        .then((response) => response.json())
        .then((result) => setCalendar(result))
        .catch((error) => console.log(error));
    }, [])

    console.log(calendars)
  return (
    <div className="header">
      <div className="header-container">
        <p className="header_title" id="header_title">
          Morning News
        </p>
        <div className="data-container">
          <p className="date_nubmer" id="date_nubmer">
            {calendars.day}
          </p>
          <p className="data_month" id="data_month">
            {mounth[calendars.mounth]}
          </p>
        </div>
      </div>
    </div>
  );
}
