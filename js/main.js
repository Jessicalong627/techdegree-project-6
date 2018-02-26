const video = document.querySelector("video");
const span = document.querySelectorAll("span");


video.addEventListener("timeupdate", () => {

for (let i = 0; i < caption.length; i+= 1) {

  if (  video.currentTime > span[i].getAttribute("data-start") && video.currentTime < span[i].getAttribute("data-end") ) {
    span[i].style.color="#F08080";

  } else
  {
    span[i].style.color="#000000";
  }

}

});
