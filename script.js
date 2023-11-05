//pegando el no html
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

// adicionando eventos
buttonStart.addEventListener("click", startTimer)
buttonStop.addEventListener("click", pauseTimer)
buttonResume.addEventListener("click", resumeTimer)
buttonReset.addEventListener("click", resetTimer)

//função que inicia 
function startTimer() {
    //definindo um intervalo que executará uma função a cada 10 segundos 
    interval = setInterval(() => {
        //se for verdadeira não executa
        if (!isPaused){
            //incrementa em 10 a cada iteração.
            milliseconds += 10;

            //verifica se a variável atingiu 1000, se sim ela adiciona mais um segundo à variável seconds
            if(milliseconds === 1000){
                seconds++;
                milliseconds = 0;
            }

            //verifica se a variável atingiu 60, se sim ela adiciona mais um minuto à variável minutes
            if(seconds === 60){
                minutes++;
                seconds = 0;
            }
            //mudança do conteúdo do html
            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);
        }
    },10)
}
//se o time for < que 10 ele add um 0 à frente
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