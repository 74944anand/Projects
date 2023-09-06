let progress = document.getElementById("progress");
let songs = document.getElementById("songs");
let ctrlIcon = document.getElementById("ctrlIcon");

songs.onloadedmetadata = function () {
  progress.max = songs.duration;
  progress.min = songs.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("playsongs")) {
    songs.pause();
    ctrlIcon.classList.remove("playsongs");
    ctrlIcon.classList.add("pause");
    ctrlIcon.src = "Img/play.png";
  } else {
    songs.play();
    ctrlIcon.classList.remove("pause");
    ctrlIcon.classList.add("playsongs");
    ctrlIcon.src = "Img/pause.png";
  }
}
if (songs.play()) {
  setInterval(() => {
    progress.value = songs.currentTime;
  }, 500);
}

progress.onchange = function () {
  songs.play();
  songs.currentTime = progress.value;
  ctrlIcon.src.add("Img/play.png");
  ctrlIcon.src.remove("Img/pause.png");
};
