const timerLeft = document.getElementById("timerLeft");
const timerRight = document.getElementById("timerRight");
const leftRotation = document.getElementById("leftRotation");
const rightRotation = document.getElementById("rightRotation");

let intervalLeft;
let intervalRight;
let startTimeLeft;
let startTimeRight;
let isRunningLeft = false;
let isRunningRight = false;

function startTimerLeft() {
    startTimeLeft = new Date();
    intervalLeft = setInterval(updateTimerLeft, 100);
}

function stopTimerLeft() {
    clearInterval(intervalLeft);
}


function updateTimerLeft() {
    const now = new Date();
    const elapsedTime = now - startTimeLeft;
    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const milliseconds = Math.floor(elapsedTime % 1000 / 100);
    timerLeft.textContent = `${pad(seconds)}.${milliseconds}`;
}


function startTimerRight() {
    startTimeRight = new Date();
    intervalRight = setInterval(updateTimerRight, 100);
}

function stopTimerRight() {
    clearInterval(intervalRight);
}

function updateTimerRight() {
    const now = new Date();
    const elapsedTime = now - startTimeRight;
    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const milliseconds = Math.floor(elapsedTime % 1000 / 100);
    timerRight.textContent = `${pad(seconds)}.${milliseconds}`;
}


function pad(number) {
    return number.toString().padStart(2, "0");
}

leftRotation.addEventListener("click", () => {
    if (!isRunningLeft) {
        startTimerLeft();
    } else {
        stopTimerLeft();
    }
    isRunningLeft = !isRunningLeft;
});

rightRotation.addEventListener("click", () => {
    if (!isRunningRight) {
        startTimerRight();
    } else {
        stopTimerRight();
    }
    isRunningRight = !isRunningRight;
});
