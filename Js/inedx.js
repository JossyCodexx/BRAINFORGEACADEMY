// =======================
// Hero Image Slider
// =======================
const slides = document.getElementById("slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dots");

let index = 0;
const slideCount = slides.children.length;

// Create dots
for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => moveToSlide(i));
  dotsContainer.appendChild(dot);
}

const dots = dotsContainer.querySelectorAll("button");

// Move to slide
function moveToSlide(i) {
  index = i;
  updateSlider();
}

// Update slider
function updateSlider() {
  slides.style.transform = `translateX(${-index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Next/Prev
function nextSlide() {
  index = (index + 1) % slideCount;
  updateSlider();
}

function prevSlideFunc() {
  index = (index - 1 + slideCount) % slideCount;
  updateSlider();
}

// Event listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlideFunc);

// Auto-play
setInterval(nextSlide, 5000); // 5s interval
