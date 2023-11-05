const buttonStart = document.querySelector('#buttonStart');
const buttonStop = document.querySelector('#buttonStop');
const buttonReset = document.querySelector('#buttonReset');

const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const millisecondsEl = document.querySelector('#milliseconds ');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

buttonStart.addEventListener("click", startTimer)
buttonStop.addEventListener("click", pauseTimer)
buttonResume.addEventListener("click", resumeTimer)
buttonReset.addEventListener("click", resetTimer)

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused){
            milliseconds += 10;

            if(milliseconds === 1000){
                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60){
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);

        }
    },10)
}
  
function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function formatMilliseconds (time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}

function pauseTimer(){
    isPaused = true;
}

function resumeTimer(){
    isPaused = false;
}

function resetTimer(){
    clearInterval(interval)
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "000";

    isPaused = false; 



}