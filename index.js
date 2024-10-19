// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation for the heading to move up and fade out
gsap.to("#main-heading", {
  opacity: 0,
  y: 0, // Gradually hide
  // Move upwards by 200 pixels
  ease: "power1.out", // Smooth easing
  scrollTrigger: {
    trigger: "#main-heading",
    start: "top center", // Start animation when the top of the heading hits the top of the viewport
    end: "bottom top", // End animation when the bottom of the heading hits the top of the viewport
    scrub: true, // Link animation to scroll position
  },
});

// Initially hide the slider (set it below the visible area)
gsap.set(".slider", { opacity: 0 });
// Animation to reveal he slider at the correct scroll position
gsap.to(".slider", {
  y: 0, // Move slider to its original position
  opacity: 5, // Ensure it's visible
  duration: 1, // Smooth transition duration
  ease: "power1.out", // Smooth easing
  scrollTrigger: {
    // Start this animation after the heading
    start: "top top", // Start animation when the top of the heading hits the top of the viewport
    end: "bottom bottom", // End animation when the bottom of the heading hits the top of the viewport
    scrub: true, // Link animation to scroll position
  },
});
