"use strict";

setTimeout(showImages, 5000);
setInterval(showImages, 45000);

function showImages() {
  const fades = 10000;

  setTimeout(showImg2, 5000);
  function showImg2() {
    $(".img2").fadeToggle(fades);
  }
  setTimeout(showImg2, 15000);
  function showImg2() {
    $(".img2").fadeToggle(fades);
  }

  setTimeout(showImg3, 15000);
  function showImg3() {
    $(".img3").fadeToggle(fades);
  }
  setTimeout(showImg3, 25000);
  function showImg3() {
    $(".img3").fadeToggle(fades);
  }

  setTimeout(showImg4, 25000);
  function showImg4() {
    $(".img4").fadeToggle(fades);
  }
  setTimeout(showImg4, 35000);
  function showImg4() {
    $(".img4").fadeToggle(fades);
  }
}
