const clock = document.getElementsByClassName("clock-display")


console.log(tellTime());


setInterval(tellTime, 1000);



//Pulls new date and gets time
function tellTime() {
    let now = new Date;
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    console.log(`${hrs}:${min}:${sec}`);
    clock[0].innerHTML = (`${hrs}:${min}:${sec}`);
}

