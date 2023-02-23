(function () {
	"use strict";

	const clock = document.getElementsByClassName("clock-display");
	const bar = document.getElementsByClassName("clock-progress-bar");
	const face = document.getElementsByClassName("clock-face");

	let isHovering = false;
	//Set boolean to toggle what to display
	clock[0].addEventListener("mouseover", function () {
		isHovering = true;
	});
	clock[0].addEventListener("mouseout", function () {
		isHovering = false;
	});

	setInterval(tellTime, 1000);

	//Pulls new date and gets time
	function tellTime() {
		//get new date, set variables for HH:MM:SS
		let now = new Date();
		let hrs = now.getHours();
		let min = now.getMinutes();
		let sec = now.getSeconds();
		let totalTime = 0;
		totalTime = hrs + min + sec;
		console.log("TotalTime", totalTime);
		//Adds 0's to pad clock (ie: 10:09 instead of 10:9)
		if (sec < 10) {
			sec = "0" + sec;
		}
		if (min < 10) {
			min = "0" + min;
		}
		if (hrs < 10) {
			hrs = "0" + hrs;
		}
		//log time to console & change HTML to display time
		if (isHovering) {
			clock[0].innerHTML = `${hrs.toString(16)}:${min.toString(
				16
			)}:${sec.toString(16)}`;
		} else {
			clock[0].innerHTML = `${hrs}:${min}:${sec}`;
		}

		//Track % to next minute
		const tFactor = 100 / 60;
		let percent = sec * tFactor;
		console.log(`${percent.toFixed(2)}% to next minute`);
		//Changes time bar size & color to reflect % to next minute
		bar[0].style.width = `${percent * 2}px`;
		if (percent < 25) {
			bar[0].style.backgroundColor = "white";
		} else if (percent > 25 && percent < 50) {
			bar[0].style.backgroundColor = "lawngreen";
		} else if (percent > 50 && percent < 75) {
			bar[0].style.backgroundColor = "yellow";
		} else if (percent > 75) {
			bar[0].style.backgroundColor = "crimson";
		}

		console.log("TotalTime:", totalTime);
		let hueTime = Math.round(totalTime * 2.5);
		console.log("hueTime:", hueTime);
		face[0].style.backgroundColor = `hsl(${hueTime}, 80%, 50%)`;
	}
})();
