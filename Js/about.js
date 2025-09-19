
  const aboutImg = document.getElementById("aboutImage");
  const aboutImages = [
    "./images/about1.jpg",
    "./images/about2.jpg",
    "./images/about3.jpg"
  ];
  
  let index = 0;
  setInterval(() => {
    index = (index + 1) % aboutImages.length;
    aboutImg.style.opacity = 0; // fade out
    setTimeout(() => {
      aboutImg.src = aboutImages[index];
      aboutImg.style.opacity = 1; // fade in
    }, 500);
  }, 4000); // every 4s






























  // About Section Gallery Animation
(function () {
  const galleryImages = document.querySelectorAll(".about-gallery img");
  if (!galleryImages.length) return;

  let galleryIndex = 0;

  function showNextAboutImage() {
    // remove active from all
    galleryImages.forEach(img => img.classList.remove("active"));
    
    // add active to the next image
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
    galleryImages[galleryIndex].classList.add("active");
  }

  // initialize
  galleryImages[0].classList.add("active");

  // run every 4s
  setInterval(showNextAboutImage, 4000);
})();







