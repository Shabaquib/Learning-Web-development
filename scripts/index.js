document.getElementById('start-button').addEventListener("click", startTimer);
document.getElementById('flag-button').addEventListener("click", flagTimer);
document.getElementById('stop-button').addEventListener("click", stopTimer);

let timerCreated = 0;
let count = 0;

function startTimer() {
    if (timerCreated) {
        clearInterval(timerCreated);
        timerCreated = setInterval(clockFunction, 1000);
    } else {
        timerCreated = setInterval(clockFunction, 1000);
    }
}

function flagTimer() {
    if (timerCreated) {
        ++count;
        let flagValue = document.getElementById('clock').innerHTML;
        document.getElementById('container-right-content').innerHTML += "<div class='timer-flags'><div class='timer-flag-1'>" + count + "</div><div class='timer-flag-2'>"+ flagValue +"</div></div>";
    } else {
        console.log("No Timer yet");
    }
}

function stopTimer() {
    if(timerCreated) {
        clearInterval(timerCreated);
        timerCreated = 0;
        secondValue = 0;
        minuteValue = 0;
        hourValue = 0;
    }
    document.getElementById('clock').innerHTML = "00 : 00 : 00";
}

let secondValue = 0;
let minuteValue = 0;
let hourValue = 0;

function clockFunction() {
    secondValue += 1;
    
    if(secondValue == 60) {
        minuteValue += 1;
        secondValue = 0;
    }
    if(minuteValue == 60) {
        hourValue += 1;
        minuteValue = 0;
    }

    document.getElementById('clock').innerHTML = String(hourValue).padStart(2, '0') + " : " + String(minuteValue).padStart(2, '0') + " : " + String(secondValue).padStart(2, '0');
}