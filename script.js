// To get Current Weekday
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const currentDate = new Date();
let day = weekday[currentDate.getDay()];
document.querySelector("#CurrentDay").innerHTML = day;


// To get Current Time
const CurrentUTCtime = new Date(currentDate);
let time = CurrentUTCtime.getTime();
let hours= CurrentUTCtime.getUTCHours();
const mins= CurrentUTCtime.getUTCMinutes();
const Currenttime = `${hours}:${mins<10?"0" : ""}${mins}`;

document.querySelector("#CurrentUTCtime").innerHTML = Currenttime;
