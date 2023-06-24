let lastScroll = 0;
const mouses = document.querySelectorAll(".mouse");

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }

  lastScroll = window.scrollY;
});

// window.addEventListener("mousemove", (e) => {
//   cursor.style.top = e.pageY + "px";
//   cursor.style.left = e.pageX + "px";

//   mouseeff1.style.top = e.pageY + "px";
//   mouseeff1.style.left = e.pageX + "px";

//   mouseeff2.style.top = e.pageY + "px";
//   mouseeff2.style.left = e.pageX + "px";
// });
window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
  });
});
