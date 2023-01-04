const clock = document.getElementsByClassName("clock-display")
console.log(getTime());

setInterval(getTime, 1000);


//Pulls new date and gets time
function getTime() {
    let now = new Date;
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    if (sec < 10) {
        sec = "0" + sec;
    }
    console.log(`${hrs}:${min}:${sec}`);
    return (`${hrs}:${min}:${sec}`);
}

