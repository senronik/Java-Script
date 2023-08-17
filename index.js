const api={
    key:"fcc8de7015bbb202209bbf0261babf4c",
    baseURL:"https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getData(searchbox.value);
  }
}
const getData=async (query)=>{
    var weatherdata= await fetch(`${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key}`);
    var weatherData=await weatherdata.json();
    displayData(weatherData);
}

function displayData(data){
  console.log(data);
    let city = document.querySelector('.location .city');
    city.innerText = `${data.name}, ${data.sys.country}`;

    
  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);
    
  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(data.main.temp)}<span>°c</span>`;

  
  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = data.weather[0].main;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c`;
}


function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }