//los angeles
function updateTime() {
  let capeTownEle = document.querySelector("#cape-town");
  if (capeTownEle) {
    let capeTownDateEle = capeTownEle.querySelector(".date");
    let capeTownTimeEle = capeTownEle.querySelector(".time");
    let capeTownTime = moment().tz("Africa/Johannesburg");
    capeTownDateEle.innerHTML = moment().format("MMMM Do YYYY");
    capeTownTimeEle.innerHTML = capeTownTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let bronkhorstspruitEle = document.querySelector("#Bronkhorstspruit");
  if (bronkhorstspruitEle) {
    let bronkhorstspruitDateEle = bronkhorstspruitEle.querySelector(".date");
    let bronkhorstspruitTimeEle = bronkhorstspruitEle.querySelector(".time");
    let bronkhorstspruitTime = moment().tz("Africa/Johannesburg");
    bronkhorstspruitDateEle.innerHTML = moment().format("MMMM Do YYYY");
    bronkhorstspruitTimeEle.innerHTML = bronkhorstspruitTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let lubumbashiEle = document.querySelector("#lubumbashi");
  if (lubumbashiEle) {
    let lubumbashiDateEle = lubumbashiEle.querySelector(".date");
    let lubumbashiTimeEle = lubumbashiEle.querySelector(".time");
    let lubumbashiTime = moment().tz("Africa/Lubumbashi");
    lubumbashiDateEle.innerHTML = moment().format("MMMM Do YYYY");
    lubumbashiTimeEle.innerHTML = lubumbashiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let kinshasaEle = document.querySelector("#kinshasa");
  if (kinshasaEle) {
    let kinshasaDateEle = kinshasaEle.querySelector(".date");
    let kinshasaTimeEle = kinshasaEle.querySelector(".time");
    let kinshasaTime = moment().tz("Africa/Kinshasa");
    kinshasaDateEle.innerHTML = moment().format("MMMM Do YYYY");
    kinshasaTimeEle.innerHTML = kinshasaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
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
          <div class="citydetails">
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>
        <br/>
        <a href="/">All cities</a>`;
}

let selectcity = document.querySelector("#city");
selectcity.addEventListener("change", updateCity);
