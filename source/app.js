function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTimeZone = moment().tz("Europe/London");
  londonDateElement.innerHTML = moment().format("MMMM Do, YY");
  londonTimeElement.innerHTML = londonTimeZone.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  //Madrid
  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");
  let madridTimeZone = moment().tz("Europe/Madrid");
  madridDateElement.innerHTML = moment().format("MMMM Do, YY");
  madridTimeElement.innerHTML = madridTimeZone.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  let stockholmElement = document.querySelector("#stockholm");
  let stockholmDateElement = stockholmElement.querySelector(".date");
  let stockholmTimeElement = stockholmElement.querySelector(".time");
  let stockholmTimeZone = moment().tz("Europe/Stockholm");
  stockholmDateElement.innerHTML = moment().format("MMMM Do, YY");
  stockholmTimeElement.innerHTML = stockholmTimeZone.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
