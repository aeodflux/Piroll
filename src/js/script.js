var video = document.querySelector(".process__video");
var videoButton = document.querySelector(".process__button");

var isVideoOpened = true;

video.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (isVideoOpened) {
      videoButton.classList.remove("process__button_enabled")
      videoButton.classList.add("process__button_disabled")
    } else {
      videoButton.classList.remove("process__button_disabled")
      videoButton.classList.add("process__button_enabled")
    }
    isVideoOpened = !isVideoOpened
  });
  