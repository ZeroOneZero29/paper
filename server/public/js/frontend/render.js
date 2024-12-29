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
let date_nubmer = document.getElementById("date_nubmer");
let date_title = document.getElementById("data_month");

fetch("/date/", {
  method: "GET",
})
  .then((response) => response.json())
  .then((result) => insertingData(result));

function insertingData(params) {
  console.log(params);
  date_nubmer.innerHTML = params.day;
  date_title.innerHTML = mounth[params.mounth];
}
