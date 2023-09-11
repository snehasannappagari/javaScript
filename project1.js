const apiKey = '8195300e9ee2307c16f39989e20e2acf';

const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney', 'Berlin', 'Rome', 'Los Angeles', 'India',, 'Rio de Janeiro'];

async function getWeatherData() {
  try {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    updataInfo(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.querySelector('.weather-data').innerHTML = 'Error fetching weather data.';
  }
}

function updataInfo(data) {
  const weatherContainer = document.querySelector('.weather-data');
  weatherContainer.innerHTML = ''; // Clear previous content

  const cityName = document.createElement('h2');
  cityName.innerHTML = data.name;

  const temp = document.createElement('p');
  temp.innerHTML = `temp: ${data.main.temp}°C`;

  const desc = document.createElement('p');
  desc.innerHTML = `desc: ${data.weather[0].desc}`;



  weatherContainer.appendChild(cityName);
  weatherContainer.appendChild(temp);
  weatherContainer.appendChild(desc);
  
}

window.addEventListener('load', getWeatherData);