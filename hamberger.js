function handlemenu() {
  const nav = document.querySelector(".fix"); // Navbar container
  const menuIcon = document.querySelector(".menu-icon"); // Menu icon
  const closeIcon = document.querySelector(".close-icon");
  const navlist = document.querySelector(".nav-list"); // Close icon

  // Toggle the navbar visibility and background color
  if (nav.classList.contains("active")) {
    // If the navbar is active, collapse it
    nav.classList.remove("active");
    nav.style.backgroundColor = ""; // Reset the background color
    nav.style.height = ""; // Reset the height
  } else {
    // If the navbar is inactive, expand it
    nav.classList.add("active");
    nav.style.backgroundColor = "black"; // Set the background color to cyan
    nav.style.height = "100vh";
    navlist.classList.add("hidden");

    // Expand to full-screen height
  }

  // Toggle between showing the menu and close icons
  menuIcon.classList.toggle("hidden"); // Hide or show the menu icon
  closeIcon.classList.toggle("hidden");
  navlist.classList.toggle("hidden"); // Hide or show the close icon
}
