const slider = document.querySelector(".right");
const heading = document.querySelector("h5");
const sliderContainer = document.querySelector(".slider");
const slides = slider.querySelectorAll(".image");

// Define different headings and background colors for each image slide
const slidesData = [
  {
    heading: ["DIGITAL", "MARKETING"], // Break into two lines
    backgroundColor: "rgba(34, 193, 195, 1)", // Solid background color
  },
  {
    heading: ["CREATIVE", "STRATEGY"], // Break into two lines
    backgroundColor: "rgba(253, 187, 45, 1)", // Solid background color
  },
  {
    heading: ["BRAND", "BUILDING"], // Break into two lines
    backgroundColor: "rgba(131, 58, 180, 1)", // Solid background color
  },
  {
    heading: ["FUTURE", "SOLUTIONS"], // Break into two lines
    backgroundColor: "#62c3ed", // Solid background color
  },
];

let currentSlideIndex = 0;
let currentWordIndex = 0; // Keep track of which word is currently changing

// Function to update heading character by character with uppercase to lowercase animation
function updateHeadingCharacterByCharacter(newHeading) {
  heading.innerHTML = ""; // Clear the heading before updating
  currentWordIndex = 0; // Reset word index for new heading

  // Start changing the first word
  changeWord(newHeading[currentWordIndex]);
}

// Function to change each word character by character
function changeWord(word) {
  let index = 0; // Character index for the current word
  const wordDiv = document.createElement("div");
  wordDiv.classList.add("word");

  word.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char.toUpperCase(); // Start with uppercase
    wordDiv.appendChild(span);

    // Add class to animate the character transformation from uppercase to lowercase
    setTimeout(() => {
      span.classList.add("to-lowercase");
    }, index * 100); // Delay based on character index

    index++;
  });

  heading.appendChild(wordDiv);

  // Set timeout to change the next word after the current word finishes changing
  setTimeout(() => {
    currentWordIndex++;
    if (currentWordIndex < slidesData[currentSlideIndex].heading.length) {
      setTimeout(() => {
        // Change the next word after a short delay
        changeWord(slidesData[currentSlideIndex].heading[currentWordIndex]);
      }); // Adjust timing between word changes here (500 ms)
    }
  }, index * 100); // After the last character of the current word
}

// Function to detect when an image is fully visible
function checkFullyVisibleSlide() {
  slides.forEach((slide, index) => {
    const rect = slide.getBoundingClientRect();

    // Check if the image is fully visible
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      if (index !== currentSlideIndex) {
        currentSlideIndex = index;
        updateHeadingCharacterByCharacter(slidesData[index].heading);

        // Change background color smoothly
        sliderContainer.style.backgroundColor =
          slidesData[index].backgroundColor;
      }
    }
  });
}

// Add event listener for scroll
slider.addEventListener("scroll", () => {
  checkFullyVisibleSlide();
});

// Optional: Check when page is loaded or resized
window.addEventListener("resize", checkFullyVisibleSlide);
window.addEventListener("load", checkFullyVisibleSlide);
