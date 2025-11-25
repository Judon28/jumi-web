const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const mobileMenu= document.getElementById("mobile-menu");
const getResumeBtn = document.getElementById("getResumeBtn");
const successMsg = document.getElementById("success-msg");
const emailField = document.getElementById("emailField");
const getResumeForm = document.getElementById("getResumeForm");


/*open menu smoothly*/
function openMenu () {
    openMenuBtn.classList.add("hidden");

    //Toggle menu animation
    mobileMenu.classList.toggle("max-h-0");
    mobileMenu.classList.toggle("max-h-96");
    mobileMenu.classList.toggle("opacity-0");
    mobileMenu.classList.toggle("opacity-100");
    mobileMenu.classList.toggle("-translate-y-4");
    mobileMenu.classList.toggle("translate-y-0");   

    // Toggle icons with transitions
    openMenuBtn.classList.toggle("opacity-100");
    openMenuBtn.classList.toggle("opacity-0");

    closeMenuBtn.classList.toggle("opacity-0");
    closeMenuBtn.classList.toggle("opacity-100");

    closeMenuBtn.classList.remove("hidden");
    closeMenuBtn.classList.add("pr-4")
    console.log("clicked")
}

openMenuBtn.addEventListener("click", openMenu)

/*close menu smoothly*/
function closeMenu () {
    closeMenuBtn.classList.add("hidden");

    mobileMenu.classList.toggle("max-h-96");
    mobileMenu.classList.toggle("max-h-0");
    mobileMenu.classList.toggle("opacity-100");
    mobileMenu.classList.toggle("opacity-0");
    mobileMenu.classList.toggle("translate-y-0");   
    mobileMenu.classList.toggle("-translate-y-4");

    // Toggle icons with transitions
    closeMenuBtn.classList.toggle("opacity-100");
    closeMenuBtn.classList.toggle("opacity-0");

    openMenuBtn.classList.toggle("opacity-0");
    openMenuBtn.classList.toggle("opacity-100");

    openMenuBtn.classList.remove("hidden");
    openMenuBtn.classList.add("pr-4");

}

closeMenuBtn.addEventListener("click", closeMenu)

// Get resume form action

getResumeForm.addEventListener("submit", async (e) => {
  // Prevent normal page reload
  e.preventDefault();

  // Check browser validation (required fields)
  if (!getResumeForm.checkValidity()) {
    getResumeForm.reportValidity();
    return;
  }

  // Submit to Netlify
  await fetch("/", {
    method: "POST",
    body: new FormData(getResumeForm),
  });

  // Show the success message
  successMsg.classList.remove("hidden");

  // Optionally clear the form
  getResumeForm.reset();
});

//details for contact form
const form = document.getElementById("contact-form");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  // Prevent normal page reload
  e.preventDefault();

  // Check browser validation (required fields)
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Submit to Netlify
  await fetch("/", {
    method: "POST",
    body: new FormData(form),
  });

  // Show the success message
  msg.classList.remove("hidden");

  // Optionally clear the form
  form.reset();
});
