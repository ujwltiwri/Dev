let recordBtn = document.querySelector(".record-btn");
let recordBtnCont = document.querySelector(".record-btn-cont");
let captureBtn = document.querySelector(".capture-btn");
let captureBtnCont = document.querySelector(".capture-btn-cont");
let timerCont = document.querySelector(".timer-cont");
let timer = document.querySelector(".timer");
let video = document.querySelector("video");
let filterColor = "transparent";
//main logic for recorder
let mediaRecorder;
let chunks = [];
let constraints = {
  audio: true,
  video: false,
};

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  video.srcObject = stream;
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.addEventListener("start", () => {
    console.log("recording started");
  });

  mediaRecorder.addEventListener("ondataavailable", (event) => {
    chunks.push(event.data); //pushing available blob into chunks array
  });

  mediaRecorder.addEventListener("stop", () => {
    console.log("rec stopped");

    let blob = new Blob(chunks, { type: "video/mp4" });
    let videoURL = URL.createObjectURL(blob);
    console.log(videoURL);

    let a = document.createElement("a");
    a.href = videoURL;
    a.download = "myVideo.mp4";
    a.click();
  });
});

//recording button
let isRecording = false;
recordBtnCont.addEventListener("click", () => {
  if (!isRecording) {
    //we have to start recording
    mediaRecorder.start();
    startTimer();
    recordBtn.classList.add("scale-record");
    timer.style.display = "block";
  } else {
    //we have to stop the recording
    mediaRecorder.stop();
    stopTimer();
    recordBtn.classList.remove("scale-record");
    timer.style.display = "none";
  }

  isRecording = !isRecording;
});

let counter = 0;
let timerId;

let startTimer = () => {
  timer.style.display = "block";
  function displayTimer() {
    let totalSeconds = counter;

    let hours = Number.parseInt(totalSeconds / 3600);
    totalSeconds = totalSeconds % 3600;

    let minutes = Number.parseInt(totalSeconds / 60);
    totalSeconds = totalSeconds % 60;

    let seconds = totalSeconds;

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    timer.innerHTML = `${hours} : ${minutes} : ${seconds}`;

    counter++;
  }

  timerId = setInterval(displayTimer, 1000);
};

function stopTimer() {
  clearInterval(timerId);
  timer.innerHTML = "00:00:00";
  timer.style.display = "none";
}

//capture button
captureBtnCont.addEventListener("click", function () {
  captureBtn.classList.add("scale-capture");
  //canvas
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  //for filters
  context.fillStyle = filterColor;
  context.fillRect = (0, 0, canvas.width, canvas.height);

  let image = canvas.toDataURL("image/jpeg");

  let a = document.createElement("a");
  a.href = image;
  a.download = "myPic.jpeg";
  a.click();

  setTimeout(function () {
    captureBtn.classList.remove(".scale-capture");
  }, 1000);
});

let allFilters = document.querySelectorAll(".filter"); //selects every filter class
let filterLayer = document.querySelector(".filter-layer");
allFilters.forEach((filteredEle) => {
  filteredEle.addEventListener("click", () => {
    //getting css of selected filtered color
    filterColor = window
      .getComputedStyle(filteredEle)
      .getPropertyValue("background-color");
    filterLayer.style.backgroundColor = filterColor;
  });
});
