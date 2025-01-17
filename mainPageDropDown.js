// Hamburger JS
const hamburgerBar = document.querySelector(".hamburger");
const mainBreakpointNavOverlay = document.querySelector(".main-breakpoint-nav-overlay");
const navLinks = document.querySelector("main-breakpoint-overlay-nav-options");

hamburgerBar.addEventListener("click", ()=>{
    hamburgerBar.classList.toggle("active");
    mainBreakpointNavOverlay.classList.toggle("active");
    navLinks.classList.toggle("active");

})

document.querySelectorAll(".main-breakpoint-overlay-nav-options").forEach(n => n.addEventListener("click", () => {
    hamburgerBar.classList.remove("active");
    mainBreakpointNavOverlay.classList.remove("active");
    navLinks.classList.toggle("active");

}))