const carouselSlide = document.querySelector(".carousel-slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

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
