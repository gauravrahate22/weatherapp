document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    getWeather(city);
});

function getWeather(city) {
    const apiKey = '012d783a5853e40dbe53169e2524f24a'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('location').textContent = data.name;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Could not fetch weather data. Please try again.');
        });
}
