const apiKey = "0ab2697357fbb4ad3c8303770f36edb8";

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  getWeather(city);
});

function getWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("temp").innerText = data.main.temp + "°C";
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("desc").innerText = data.weather[0].description;

      changeBackground(data.weather[0].main);
    });
}

function changeBackground(weather) {
  let bg = "img/clear.jpg";

  if (weather === "Clouds") bg = "img/cloudy.jpg";
  if (weather === "Rain") bg = "img/rain.jpg";
  if (weather === "Mist") bg = "img/mist.jpg";
  if (weather === "Clear") bg = "img/clear.jpg";

  // Jika malam
  const hour = new Date().getHours();
  if (hour >= 18 || hour < 6) bg = "img/night.jpg";

  document.body.style.backgroundImage = `url('${bg}')`;
}
