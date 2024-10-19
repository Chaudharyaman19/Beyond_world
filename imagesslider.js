const images = document.querySelectorAll(".images img");
const heading = document.getElementById("slider-heading"); // Updated ID
const description = document.getElementById("description");

document
  .getElementById("imageContainer")
  .addEventListener("scroll", function () {
    images.forEach((img, index) => {
      const rect = img.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // Update the heading and description based on the image in view
        heading.innerText = img.dataset.title;
        description.innerText = img.dataset.description;

        // Highlight the active image
        images.forEach((i) => i.classList.remove("active"));
        img.classList.add("active");
      }
    });
  });
