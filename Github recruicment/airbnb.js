const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let slideIndex = 0;

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -300, behavior: "smooth" });
  handleAutoScroll();
});

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
  handleAutoScroll();
});

// Auto-scroll slider every 5 seconds
let autoScroll = setInterval(() => {
  nextSlide();
}, 5000);

function nextSlide() {
  slider.scrollBy({ left: 300, behavior: "smooth" });
  handleAutoScroll();
}

function handleAutoScroll() {
  clearInterval(autoScroll);
  autoScroll = setInterval(() => {
    nextSlide();
  }, 5000);
}

// Toggle dark/light mode on double-click
document.body.addEventListener("dblclick", () => {
  document.body.classList.toggle("dark-mode");
});

document.body.classList.toggle(
  "dark-mode",
  window.matchMedia("(prefers-color-scheme: dark)").matches
);

// Auto-hide navbar on scroll
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
