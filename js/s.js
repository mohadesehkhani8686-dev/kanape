//play audio
document.querySelectorAll(".play-button").forEach(div => {
    div.addEventListener("click", function() {
      var audio = document.getElementById("audioPlayer");
      audio.src = this.getAttribute("data-audio"); // تغییر فایل صوتی
      audio.play();
    });
  });