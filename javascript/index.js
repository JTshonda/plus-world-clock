//los angeles
function updateTime() {
  let losAngelesEle = document.querySelector("#los-angeles");
  if (losAngelesEle) {
    let losAngelesDateEle = losAngelesEle.querySelector(".date");
    let losAngelesTimeEle = losAngelesEle.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateEle.innerHTML = moment().format("MMMM Do YYYY");
    losAngelesTimeEle.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let londonEle = document.querySelector("#london");
  if (londonEle) {
    let londonDateEle = londonEle.querySelector(".date");
    let londonTimeEle = londonEle.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateEle.innerHTML = moment().format("MMMM Do YYYY");
    londonTimeEle.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let sydneyEle = document.querySelector("#sydney");
  if (sydneyEle) {
    let sydneyDateEle = sydneyEle.querySelector(".date");
    let sydneyTimeEle = sydneyEle.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateEle.innerHTML = moment().format("MMMM Do YYYY");
    sydneyTimeEle.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");
  let cityTime = moment()
    .tz(cityTimeZone)
    .format("h:mm:ss [<small>]A[</small>]");
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = ` <div class="city"">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>`;
}

let selectcity = document.querySelector("#city");
selectcity.addEventListener("change", updateCity);
