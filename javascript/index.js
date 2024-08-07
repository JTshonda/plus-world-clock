//los angeles
function updateTime() {
  let losAngelesEle = document.querySelector("#los-angeles");
  let losAngelesDateEle = losAngelesEle.querySelector(".date");
  let losAngelesTimeEle = losAngelesEle.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateEle.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTimeEle.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let londonEle = document.querySelector("#london");
  let londonDateEle = londonEle.querySelector(".date");
  let londonTimeEle = londonEle.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateEle.innerHTML = moment().format("MMMM Do YYYY");
  londonTimeEle.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");

  let sydneyEle = document.querySelector("#sydney");
  let sydneyDateEle = sydneyEle.querySelector(".date");
  let sydneyTimeEle = sydneyEle.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateEle.innerHTML = moment().format("MMMM Do YYYY");
  sydneyTimeEle.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
