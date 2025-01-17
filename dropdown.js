// Hamburger JS
const hamburgerBar = document.querySelector(".hamburger");
const breakpointNavOverlay = document.querySelector(".breakpoint-nav-overlay");
// const navLinks = document.querySelector("main-breakpoint-overlay-nav-options");

hamburgerBar.addEventListener("click", ()=>{
    hamburgerBar.classList.toggle("active");
    breakpointNavOverlay.classList.toggle("active");
    // navLinks.classList.toggle("active");
})

document.querySelectorAll(".hamburger-nav-options").forEach(n => n.addEventListener("click", () => {
    hamburgerBar.classList.remove("active");
    breakpointNavOverlay.classList.remove("active");
    // navLinks.classList.toggle("active");
}))
