var h1
var h2;
var start;
var lap;
var laps = [];
var stop;
var clear;
var time;
var t;
var bestLaptime;
var bestLap;
var best;
var lastTime;
var last;
var lapCount;
var gap;

window.onload=function () {
    h1 = document.getElementsByTagName('h1')[0];
    h2 = document.getElementsByTagName('h2')[0];
    start = document.getElementById('start');
    lap = document.getElementById('lap');
    stop = document.getElementById('stop');
    clear = document.getElementById('clear');
    best = document.getElementById('best');
    last = document.getElementById('last');
    time = 0.00;
    bestLaptime = 999.99;
    bestLap = 0;
    lastTime = 999.99;
    lapCount = 0;
    gap = 0.00;



    /* Start button */
    start.onclick = timer;

    lap.onclick = logLap;

    /* Stop button */
    stop.onclick = function(){
        clearTimeout(t);
    }

    /* Clear button */
    clear.onclick = resetEverything;
}

function add() {
    time = time + 0.01;

    h1.textContent = time.toFixed(2);

    timer();
}

function logLap(){
    laps.push(time);
    lapCount++;
    if(time < bestLaptime){
        bestLaptime = time;
        bestLap = lapCount;
    }
    gap = time - bestLaptime;
    h2.textContent = "Lap: " + lapCount;
    best.textContent = "Best lap: " + bestLaptime.toFixed(2) + " on lap: " + bestLap;
    last.textContent = "Last lap: " + time.toFixed(2) + ". This lap was " + gap.toFixed(2) + " from the best lap";

    clearLap();
}

function clearLap(){
    h1.textContent = "0.00";
    h2.textContent = "Lap: " + lapCount;
    time = 0.00;
}
function timer() {
    t = setTimeout(add, 10);
}

function resetEverything(){
    h1.textContent = "0.00";
    h2.textContent = "Lap 0";
    best.textContent = "";
    last.textContent = "";
    time = 0.00;
    lapCount = 0;
    bestLaptime = 999.99;
    bestLap = 0;
    gap = 999.99;
}




