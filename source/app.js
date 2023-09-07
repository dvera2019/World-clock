function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTimeZone = moment().tz("Europe/London");
    londonDateElement.innerHTML = moment().format("MMMM Do, YY");
    londonTimeElement.innerHTML = londonTimeZone.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
  //Madrid
  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date");
    let madridTimeElement = madridElement.querySelector(".time");
    let madridTimeZone = moment().tz("Europe/Madrid");
    madridDateElement.innerHTML = moment().format("MMMM Do, YY");
    madridTimeElement.innerHTML = madridTimeZone.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
  let stockholmElement = document.querySelector("#stockholm");
  if (stockholmElement) {
    let stockholmDateElement = stockholmElement.querySelector(".date");
    let stockholmTimeElement = stockholmElement.querySelector(".time");
    let stockholmTimeZone = moment().tz("Europe/Stockholm");
    stockholmDateElement.innerHTML = moment().format("MMMM Do, YY");
    stockholmTimeElement.innerHTML = stockholmTimeZone.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
   <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citySelectElement = addEventListener("change", updateCity);
