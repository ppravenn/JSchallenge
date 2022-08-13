const clock=document.querySelector("#clock");

function getClock(){
    const week = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
    const date= new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");
    const days = date.getDay();
    const totalDays = week[days];
    clock.innerText = `${hour}:${min}:${sec}/${totalDays}`;
}
getClock();
setInterval(getClock, 1000);
