// const apiKey = "e98bbb94acbf0953026085fd960368";
const apiKey = "YOUR_API_KEY";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 404) {
        document.getElementById("weatherCard").style.display = "block";
        document.getElementById("cityName").textContent = data.name;
        document.getElementById("description").textContent = data.weather[0].description;
        document.getElementById("temp").textContent = data.main.temp;
        document.getElementById("humidity").textContent = data.main.humidity;
        document.getElementById("wind").textContent = data.wind.speed;
        document.getElementById("pressure").textContent = data.main.pressure;
      } else {
        alert("City not found!");
      }
    })
    .catch(error => {
      alert("Error fetching data");
      console.error(error);
    });
}
