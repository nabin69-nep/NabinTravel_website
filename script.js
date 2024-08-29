const kathmnadu = document.querySelector("#ktm");
if (!kathmnadu == "") {
  kathmnadu.addEventListener("click", () => {
    window.location.href = "kathmandu.html";
  });
}
let navbarDiv = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    navbarDiv.classList.add("navbar-cng");
  } else {
    navbarDiv.classList.remove("navbar-cng");
  }
});

const navbarCollapseDiv = document.getElementById("navbar-collapse");
const navbarShowBtn = document.getElementById("navbar-show-btn");
const navbarCloseBtn = document.getElementById("navbar-close-btn");
const weather = document.querySelector("#weather");
const img = document.getElementById("temp-logo");
// show navbar
navbarShowBtn.addEventListener("click", () => {
  navbarCollapseDiv.classList.add("navbar-collapse-rmw");
});

// hide side bar
navbarCloseBtn.addEventListener("click", () => {
  navbarCollapseDiv.classList.remove("navbar-collapse-rmw");
});
var owl = $("#header-owl");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  center: true,
  dots: false,
});
$("#best-items").owlCarousel({
  nav: true,
  dots: false,
  // items: 4,
  margin: 15,

  responsive: {
    0: {
      items: 1,
      slideBy: 1,
    },
    768: {
      items: 2,
      slideBy: 2,
    },
    1000:{
      items:3,
      slideBy:3,
    },
    1200: {
      items: 4,
      slideBy: 4,

    },
  },
});
$(".tooo-do").owlCarousel({
  nav: true,
  dots: false,
  margin: 10,

  responsive: {
    0: {
      items: 1,
      slideBy: 1,
      nav:false,
      autoplay: true,
      autoplayTimeout: 3000,
      loop:true,
    },
    768:{
      items:2,
      slideBy:2,
    },
    1000:{
      items:3,
      slideBy:3,
    },
    1600: {
      items: 4,
      slideBy: 4,

    },
  },
});
async function someWeather() {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=c4e3f7c7d3be4343a80124206241308&q=kathmandu&aqi=yes`
    );
    if (!response.ok) {
      throw new Error(`The error is ${response.status}`);
    }
    const data = await response.json();
    weather.innerText = `${data.current.temp_c}${weather.innerText}C`;
    img.setAttribute("src", `${data.current.condition.icon}`);
  } catch (error) {
    weather.innerText = `23-30${weather.innerText}C`;
    return null;
  }
}
someWeather();
