// const APIKEY = "ebef46da4889fb2d6ba792921c0b57a2";
// const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=tripoli`;

// const checkweather = async function () {
//   const response = await fetch(ApiUrl + `&appid=${APIKEY}`);
//   const data = await response.json();
//   // console.log(data);
//   console.log(data);
// };
// checkweather();

// document.querySelector(".city-temp").insertAdjacentHTML = data.name;
// document.querySelector(".temp").innerHTML = data.main.temp;
// document.querySelector(".Humidity").innerHTML = data.main.humidity;
// document.querySelector(".wind").innerHTML = data.wind.speed;

// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);
// const allsection = document.querySelectorAll(".section");
// console.log(allsection);
const id = document.getElementById("weather-search");
console.log(id);
const tags = document.getElementsByTagName("button");
console.log(tags);
console.log(document.getElementsByClassName("weather-icon"));

const main = document.querySelector("main");
console.log(main);

const message = document.createElement("section");
message.classList.add("cookie-message");
message.innerHTML =
  "we use cookie message for better analytics <button class=btn btn--close-cokkie>Got It</button>";
main.append(message);

document.querySelector(".btn").addEventListener("click", function () {
  message.remove();
});
