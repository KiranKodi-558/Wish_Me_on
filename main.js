var days_time = document.getElementById("days");
var hours_time = document.getElementById("hours");
var minutes_time = document.getElementById("mins");
var seconds_time = document.getElementById("sec");



const b_day = "6 Feb 2024";


function countDown(){
    const b_day_date = new Date(b_day);
    const currentDate = new Date();

    const total_seconds = (b_day_date-currentDate)/1000;

    const days = Math.floor(total_seconds/3600/24);

    const hours = Math.floor(total_seconds/3600)%24;

    const minutes = Math.floor(total_seconds/ 60)%60;

    const seconds = Math.floor(total_seconds)%60;
    
    days_time.innerHTML = format_time(days);
    hours_time.innerHTML = format_time(hours);
    minutes_time.innerHTML = format_time(minutes);
    seconds_time.innerHTML = format_time(seconds);
}


function format_time(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);