const clock = document.getElementsByClassName("clock-display");
const bar = document.getElementsByClassName("clock-progress-bar");

console.log(tellTime());

setInterval(tellTime, 1000);

//Pulls new date and gets time
function tellTime() {
    //get new date, set variables for HH:MM:SS
    let now = new Date;
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    //Adds 0's to pad clock (ie: 10:09 instead of 10:9)
    if (sec < 10) {
        sec = "0" + sec;
    };
    if (min < 10) {
        min = "0" + min;
    };
    if (hrs < 10) {
        hrs = "0" + hrs;
    };
    //log time to console & change HTML to display time
    console.log(`${hrs}:${min}:${sec}`);
    clock[0].innerHTML = (`${hrs}:${min}:${sec}`);
    //Track % to next minute
    const tFactor = 100/60;
    let percent = sec * tFactor;
    console.log(`${percent.toFixed(2)}% to next minute`);
    //Changes time bar size & color to reflect % to next minute
    bar[0].style.width = `${percent*2}px`;
    if (percent < 25) {
        bar[0].style.backgroundColor = 'white';
    } else if (percent > 25 && percent < 50) {
        bar[0].style.backgroundColor = 'lawngreen';
    } else if (percent > 50 && percent < 75) {
        bar[0].style.backgroundColor = 'yellow';
    } else if (percent > 75) {
        bar[0].style.backgroundColor = 'crimson';
    }
}