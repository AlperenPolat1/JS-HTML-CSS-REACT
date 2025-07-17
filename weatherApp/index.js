const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = "9adb7cb582757382eda48954760e67c4"; // my api key for OpenWeatherMap.com

weatherForm.addEventListener('submit', async event => {
    event.preventDefault();
    const city = cityInput.value.trim();
    console.log("the city user entered:", city);

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            console.log("data comes from api:", weatherData); // testing
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error("Error:", error.message); // another testing
            displayError(error.message);  // Display error message to the user

        }
    } else {
        displayError("Please enter a city name");
    }
});


async function getWeatherData(city) { // This function fetches the weather data from OpenWeatherMap API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
        const errorData = await response.json(); // getting the error data from the response
        console.error("API fault:", errorData); // Log the error data for debugging
        throw new Error(errorData.message || "Weather data fetch failed");   // If the response is not ok, we need to throw an error with the message from the API
    }

    return await response.json();
}

function displayWeatherInfo(data) { // This function displays the weather information on the card
    const { name: city, main: { temp, humidity }, wind: { speed }, weather } = data;
    const { description, id } = weather[0];
    const emoji = getWeatherEmoji(id); 

    card.textContent = "";
    card.style.display = 'flex';

    const cityDisplay = document.createElement('p'); // Create a new paragraph element for the city name 
    cityDisplay.textContent = city;
    cityDisplay.classList.add('cityDisplay');

    const tempDisplay = document.createElement('p');
    tempDisplay.textContent = `${temp.toFixed(1)} °C`;
    tempDisplay.classList.add('tempDisplay');

    const humidityDisplay = document.createElement('p');
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add('humidityDisplay');

    const windDisplay = document.createElement('p');
    windDisplay.textContent = `Wind Speed: ${speed} m/s`;
    windDisplay.classList.add('windDisplay');

    const descDisplay = document.createElement('p');
    descDisplay.textContent = description;
    descDisplay.classList.add('descDisplay');

    const emojiDisplay = document.createElement('p');
    emojiDisplay.textContent = emoji;
    emojiDisplay.classList.add('weatherEmoji');

    card.append(emojiDisplay, cityDisplay, tempDisplay, descDisplay, humidityDisplay, windDisplay);
}

function getWeatherEmoji(weatherId) { // This function returns an emoji based on the weather ID and ID ranges from OpenWeatherMap.com
    if (weatherId >= 200 && weatherId < 300) {
        return "⛈️";
    } else if (weatherId >= 300 && weatherId < 500) {
        return "🌧️";
    } else if (weatherId >= 500 && weatherId < 600) {
        return "🌦️";
    } else if (weatherId >= 600 && weatherId < 700) {
        return "❄️";
    } else if (weatherId >= 700 && weatherId < 800) {
        return "🌫️";
    } else if (weatherId === 800) {
        return "☀️";
    } else if (weatherId > 800) {
        return "☁️";
    } else {
        return "❓";
    }
}

function displayError(message) { // This function displays an error message to the user
    card.textContent = "";
    card.style.display = 'flex';

    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');
    card.appendChild(errorDisplay);
}
