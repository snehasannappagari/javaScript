document.addEventListener("DOMContentLoaded", async function () {
    const countryInfo = document.querySelector(".country-info");
  
    try {
      const response = await fetch("https://restcountries.com/v3/all");
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const country = data[randomIndex];
      const html = `
        <h2>${country.name.common}</h2>
        <ul>
          <li><strong>Capital:</strong> ${country.capital}</li>
          <li><strong>Languages:</strong> ${Object.values(country.languages).join(", ")}</li>
          <li><strong>Population:</strong> ${country.population.toLocaleString()}</li>
          <li><strong>Area:</strong> ${country.area.toLocaleString()} square in kilometers</li>
          
          
        </ul>
      `;
        countryInfo.innerHTML = html;
    } catch (error) {
      console.error("Error fetching country data:", error);
      countryInfo.innerHTML = "Failed to fetch country data.";
    }
  });
  