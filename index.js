var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}



const carouselSlide = document.querySelector(".carousel-slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let translateValue = 0;

nextBtn.addEventListener("click", () => {
  const slideWidth = carouselSlide.clientWidth;
  const totalSlides = carouselSlide.childElementCount;
  translateValue -= slideWidth;

  if (translateValue < -(slideWidth * (totalSlides - 1))) {
    translateValue = 0;
  }

  carouselSlide.style.transform = `translateX(${translateValue}px)`;
});

prevBtn.addEventListener("click", () => {
  const slideWidth = carouselSlide.clientWidth;
  const totalSlides = carouselSlide.childElementCount;
  translateValue += slideWidth;

  if (translateValue > 0) {
    translateValue = -(slideWidth * (totalSlides - 1));
  }

  carouselSlide.style.transform = `translateX(${translateValue}px)`;
});




const carouselSlide1 = document.querySelector(".carousel-slide1");
const prevBtn1 = document.querySelector(".prevBtn1");
const nextBtn1 = document.querySelector(".nextBtn1");

let currentIndex = 0;

nextBtn1.addEventListener("click", () => {
  const slideWidth = carouselSlide1.clientWidth;
  const totalSlides = carouselSlide1.childElementCount;

  // Calculate the new translateValue based on the current index
  currentIndex = (currentIndex + 1) % totalSlides;
  const translateValue1 = -(slideWidth * currentIndex);

  carouselSlide1.style.transform = `translateX(${translateValue1}px)`;
});

prevBtn1.addEventListener("click", () => {
  const slideWidth = carouselSlide1.clientWidth;
  const totalSlides = carouselSlide1.childElementCount;

  // Calculate the new translateValue based on the current index
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  const translateValue1 = -(slideWidth * currentIndex);

  carouselSlide1.style.transform = `translateX(${translateValue1}px)`;
});

