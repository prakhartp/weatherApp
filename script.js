let search = document.querySelectorAll("#search");
search[0].addEventListener("keypress", processResponse);
let tempDisplay = document.querySelectorAll(".temp");
let cityName = document.querySelectorAll(".city");
let iconDisplay = document.querySelectorAll(".icon");
let weatherDetails = document.querySelectorAll(".details");

async function processResponse(event){
    if(event.keyCode == 13){
        let city = this.value;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0392274adce0e7d13bf219aa68bd3697`;
        let response = await fetch(url);
        let result = await response.json();
        console.log(result); 

        //Values to Display
        let temp = result.main.temp;
        let humidity = result.clouds.all; //Percentage
        let icon = result.weather[0].icon;
        let wind = result.wind.speed; //in m/s
        let name = result.name;

        tempDisplay[0].innerHTML = `${Math.ceil(temp - 273)} <span>&#8451</span>`;
        cityName[0].innerHTML = name;
        iconDisplay[0].innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">`
        weatherDetails[0].innerHTML = `<p> Humidity - <strong>${humidity} %</strong> </p><p> Wind  - <strong>${wind}</strong>`

    }
    
}

