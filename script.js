function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}
function validateLastName(lastName) {
  const lastNamePattern = /^[a-zA-Z- ]{3,20}$/;
  return lastNamePattern.test(lastName);
}
function validateFirstName(firstName) {
  const firstNamePattern = /^[a-zA-Z-]{2,15}$/;
  return firstNamePattern.test(firstName);
}
function validateMessage(message) {
  return message.length > 15 && message.length < 200;
}

function validateForm() {
  const emailField = document.getElementById("email");
  const lastNameField = document.getElementById("lastName");
  const firstNameField = document.getElementById("firstName");
  const messageField = document.getElementById("message");
  // Prévoyez un id "emailError" dans une balise <p> vide
  const errorEmailMessage = document.getElementById("emailError");
  const errorLastNameMessage = document.getElementById("lastNameError");
  const errorFirstNameMessage = document.getElementById("firstNameError");
  const errorMessage = document.getElementById("messageError");

  let isValid = false;
  if (!validateEmail(emailField.value)) {
    errorEmailMessage.textContent =
      "Veuillez entrer une adresse e-mail valide.";
    isValid = false;
  } else {
    errorEmailMessage.textContent = "";
    isValid = true;
  }
  if (!validateLastName(lastNameField.value)) {
    errorLastNameMessage.textContent =
      "Veuillez entrer un nom de famille valide.";
    isValid = false;
  } else {
    errorLastNameMessage.textContent = "";
    isValid = true;
  }
  if (!validateFirstName(firstNameField.value)) {
    errorFirstNameMessage.textContent = "Veuillez entrer un prénom valide.";
    isValid = false;
  } else {
    errorFirstNameMessage.textContent = "";
    isValid = true;
  }
  if (!validateMessage(messageField.value)) {
    errorMessage.textContent = "Veuillez entrer un message valide.";
    isValid = false;
  } else {
    errorMessage.textContent = "";
    isValid = true;
  }
  return isValid;
}
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

// Carroussel
let currentSlide = 0;
// Prévoyez une classe "slide" pour chaque élément du diaporama
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[index].style.display = "block";
}

// Bouton "suivant"
document.getElementById("nextSlide").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Bouton "précédent"
document.getElementById("prevSlide").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide);

// Hover
const socialIcons = document.querySelectorAll(".fa-brands");

socialIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "scale(1.2)";
    icon.style.transition = "0.5s";
    icon.style.color = "#d25d2c";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = "scale(1)";
    icon.style.transition = "0.5s";
    icon.style.color = "#4a4a4a";
  });
});

// Scroll to top
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
