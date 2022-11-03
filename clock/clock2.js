setInterval(showTime, 1000);
function showTime(){
    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hours > 12) {
        hours -= 12;
        am_pm  = "PM";
    }
    if (hours == 0) {
        hours = 12;
        am_pm  = "AM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = `${hours}:${min}:${sec}${am_pm}`;

    document.getElementById("clock").innerHTML = currentTime;
}
showTime();
