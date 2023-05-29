// Create a mini project with Weather Forecast API

// Create a minimal weather interface in HML/CSS & Javascript
// Get tge weather data that interest you the msContentScript(Eg. Temperature, Humidity, Wind ...)
// Feel free to be creative(E.g Change background color or image depending current datas from API)
// Link to the API

//1. we are usuing geocoding api to find latitude & longidute of our cities
//2.we use results of first API call to get temperature back in our second api call

const apiUrlTemp = "https://api.open-meteo.com/v1/forecast?current_weather=true&hourly=temperature_2m";

const apiUrlLoc = "https://geocoding-api.open-meteo.com/v1/search?count=1&language=en&format=json&name=";

const cityInput = document.querySelector('input[type="search"]');
const h2Output = document.querySelector("h2");

cityInput.addEventListener("change", e => {
    //console.log(e.target.value);
    fetch(apiUrlLoc + e.target.value)
        .then(response => response.json())
        .then(data => {
            /** we check if data.results is not undefined */
            /** we get latitude and longitude */
            /**if(data.results)  */
            if(typeof(data.results) !== "undefined"){
                let lat = data.results[0].latitude;
                let long= data.results[0].longitude;

                console.log(lat, long);

                fetch(`${apiUrlTemp}&latitude=${lat}&longitude=${long}`)
                    .then(tempResponse => tempResponse.json())
                    .then(tempData => {
                        let currentTemp = tempData.current_weather.temperature;
                        let addPotentialClass = "";
                        let chartLabel = tempData.hourly.time;
                        let chartData = tempData.
                        
                    if (currentTemp < 0) {
                        addPotentialClass = ' class = "cold"';
                    }else if(currentTemp < 20){
                        addPotentialClass = ' class = "hot"';
                    } else {
                        addPotentialClass = "";
                    }
                    // h2Output.innerHTML = `The current weather in ${e.target.value} is <span ${addPotentialClass}>${currentTemp} °C </span>.` // eger textContent yazsaydim sadece dereceyi degil, spani de görecektim.
                    h2Output.textContent=  `The current weather in ${e.target.value} is `;
                    let spanElm = document.createElement("span");
                    // spanElm.textContent = `${curr}` 
            
                    
                });
            }else{
                h2Output.textContent = `There is no weather data available in ${e.target.value}. Please check if you might have mispelled the name.`
            }

            drawChart(chartLabel,chartData);
        });
});

function drawChart(){
    const ctx = document.querySelector('canvas');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '7-day forecast',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

