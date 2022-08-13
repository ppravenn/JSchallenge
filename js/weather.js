const API_KEY="2ff6054947e9ea0e006284d48eb9f738";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(Response => Response.json()).then(data=>{
       const weather = document.querySelector("#temp1")
       const minTemp=document.querySelector("#min")
       const temp = document.querySelector("#tem")
       const maxTemp = document.querySelector("#max")
       const city = document.querySelector("#dong")
       city.innerText=`위치: ${data.name}`;
       weather.innerText=`날씨: ${data.weather[0].main}`;
       minTemp.innerText=`최저온도: ${data.main.temp_min}`;
        temp.innerText=` 현재온도: ${data.main.temp}`;
        maxTemp.innerText = `최고온도: ${data.main.temp_max}`
       
       
    });
}
function ongeoError(){
    alert("접근이 불가합니다.")
}
console.log()
navigator.geolocation.getCurrentPosition(onGeoOk, ongeoError)