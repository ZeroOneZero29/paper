import { useEffect, useState } from "react";
import "../css/Header.css";

export default function Header() {
  let mounth = [
    "Январь",
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

  let dayName = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const [calendars, setCalendar] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/date", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setCalendar(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="header">
      <div className="header-container">
        <p className="header_title" id="header_title">
          THE MORNING NEWS
        </p>
      </div>
      <hr className="line" />
      <div className="data-container">
        <p className="day_name" id="day_name">
          {dayName[calendars.day_name]},
        </p>
        <p className="data_month" id="data_month">
          {mounth[calendars.mounth]}
        </p>
        <p className="date_nubmer" id="date_nubmer">
          {calendars.day},
        </p>
        <p className="year" id="year">
          {calendars.year}
        </p>
      </div>
    </div>
  );
}
