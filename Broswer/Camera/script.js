let recordBtn = document.querySelector(".record-btn");
let recordBtnCont = document.querySelector(".record-btn-cont");
let captureBtn = document.querySelector(".capture-btn");
let captureBtnCont = document.querySelector(".capture-btn-cont");
let timerCont = document.querySelector(".timer-cont");
let timer = document.querySelector(".timer");
captureBtnCont.addEventListener("click", function () {
  captureBtn.classList.add("scale-capture");
  setTimeout(function () {
    captureBtn.classList.remove(".scale-capture");
  }, 1000);
});

let isRecording = false;
recordBtnCont.addEventListener("click", () => {
  if (!isRecording) {
    recordBtn.classList.add("scale-record");
    timer.style.display = "block";
  } else {
    recordBtn.classList.remove("scale-record");
    timer.style.display = "none";
  }

  isRecording = !isRecording;
});
