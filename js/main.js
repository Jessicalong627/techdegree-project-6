const video = document.querySelector(".vid");
const caption = document.querySelectorAll("span");


video.addEventListener("timeupdate", () => {

for (let i = 0; i < caption.length; i+= 1) {

  if (  video.currentTime > span[i].getAttribute("data-start"); && video.currentTime < span[i].getAttribute("data-end");) {
    caption.style.color="pink";

  } else
  {caption.style.color="black";}

}

});
