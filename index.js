const notifier = require("node-notifier");

const moment = require("moment");

const argTime = process.argv.slice(2);

const POMODORO_DURATION = argTime[0];
const BREAK_DURATIONN = argTime[1];

let isWorking = false;
let remainingTime = 0;

function formatingTime(totalSeccond) {
  const duration = moment.duration(totalSeccond, "second");
  const hours = duration.hours().toString().padStart(2, "0");
  const minutes = duration.minutes().toString().padStart(2, "0");
  const second = duration.seconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${second}`;
}

function startTimer(duration) {
  isWorking = !isWorking;
  remainingTime = duration * 60;

  const timer = setInterval(() => {
    remainingTime--;

    const formatedTime = formatingTime(remainingTime);

    console.log(`${isWorking ? "work" : "Break"} : ${formatedTime}`);

    if (remainingTime === 0) {
      clearInterval(timer);

      notifier.notify({
        title: isWorking ? "Break Time" : "Working Time",
        message: isWorking ? "Waktunya Istirahat" : "Ayoo Fokus Kembali",
        sound: true,
        wait: true,
      });

      startTimer(isWorking ? POMODORO_DURATION : BREAK_DURATIONN);
    }
  }, 1000);
}

startTimer(POMODORO_DURATION);
