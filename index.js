document.addEventListener('DOMContentLoaded', function() {

  // Sidebar pour rechercher avec la navigation

  // equipe
  const equipe = document.getElementById('equipe');
  const scrollToEquipe = document.getElementById('scrollToEquipe');

  // technologie
  const technologie = document.getElementById('technologie');
const scrollToTechnologie = document.getElementById('scrollToTechnologie');

  // Service
  const service = document.getElementById('service');
  const scrollToService = document.getElementById('scrollToService');

  // Contact
  const contact = document.getElementById('contact');
  const scrollToContact = document.getElementById('scrollToContact');

  equipe.addEventListener("click", () => {
    scrollToEquipe.scrollIntoView({ behavior: 'smooth' })
  });

  technologie.addEventListener("click", (e) => {
scrollToTechnologie.scrollIntoView({ behavior: 'smooth' })
  });

  service.addEventListener("click", (e) => {
scrollToService.scrollIntoView({ behavior: 'smooth' })
  });

  contact.addEventListener("click", (e) => {
scrollToContact.scrollIntoView({ behavior: 'smooth' })
  });



  // Sidebar responsive
const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}


// Carousel compétences
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



// Carousel Projets réalisés
const carouselSlide1 = document.querySelector(".carousel-slide1");
const prevBtn1 = document.querySelector(".prevBtn1");
const nextBtn1 = document.querySelector(".nextBtn1");

let currentIndex = 0;

nextBtn1.addEventListener("click", () => {
  const slideWidth = carouselSlide1.clientWidth;
  const totalSlides = carouselSlide1.childElementCount;

  currentIndex = (currentIndex + 1) % totalSlides;
  const translateValue1 = -(slideWidth * currentIndex);

  carouselSlide1.style.transform = `translateX(${translateValue1}px)`;
});

prevBtn1.addEventListener("click", () => {
  const slideWidth = carouselSlide1.clientWidth;
  const totalSlides = carouselSlide1.childElementCount;

  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  const translateValue1 = -(slideWidth * currentIndex);

  carouselSlide1.style.transform = `translateX(${translateValue1}px)`;
});



// Modal politique de confidentialité formulaire
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('modal');

  openModalBtn.addEventListener('click', function(e) {
    e.preventDefault();
      modal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});



// Modal Mention légale footer
const openModalMention = document.getElementById('openModalMentions');
const closeModalMention = document.getElementById('closeModalMentions');
const modalMention = document.getElementById('modalMentions');

openModalMention.addEventListener('click', (e) =>{
  e.preventDefault();
  modalMention.style.display = 'block';
});

closeModalMention.addEventListener('click', () =>{
  modalMention.style.display = "none";
})

window.addEventListener("click", (e) => {
  if(e.target === modalMention) {
    modalMention.style.display = "none";
  }
});



// Modal politique de confidentialité footer
  const openModalBtn1 = document.getElementById('openModalBtn1');
  const closeModalBtn1 = document.getElementById('closeModalBtn1');
  const modal1 = document.getElementById('modal1');

  openModalBtn1.addEventListener('click', function(e) {
    e.preventDefault();
      modal1.style.display = 'block';
  });

  closeModalBtn1.addEventListener('click', function() {
      modal1.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target === modal1) {
          modal1.style.display = 'none';
      }
  });


