// TOGGLE THEMES SCRIPT
const toggleButton = document.getElementById("theme-toggle__btn");
const iconElement = document.getElementById("theme-toggle__icon");

//COLOR TOOGGLE
document.addEventListener('DOMContentLoaded', () => {
  const colorPicker = document.getElementById('Picker');
  const changeColorBtn = document.getElementById('color-picker__btn');
  const root = document.documentElement;
  const updateColor = (event) => {
      const hexColor = event.target.value;
      root.style.setProperty('--text-head', hexColor);
  };
  changeColorBtn.addEventListener('click', () => {
    colorPicker.click();
  });

  colorPicker.addEventListener('input', updateColor);
});





// Function to enable dark mode
const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "enabled");
};
// Function to disable dark mode
const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", null);
};
const darkMode = localStorage.getItem("dark-mode");
if (darkMode === "enabled") {
  enableDarkMode();
  iconElement.textContent = "dark_mode";
} else {
  disableDarkMode();
  iconElement.textContent = "light_mode";
}
toggleButton.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    disableDarkMode();
    iconElement.textContent = "light_mode";
  } else {
    enableDarkMode();
    iconElement.textContent = "dark_mode";
  }
});





// Navbar script
document.addEventListener("DOMContentLoaded", function () {
  var sidebarBtn = document.querySelector(".navbar__burger-menu");
  var sideBar = document.querySelector(".side-navbar");
  var centerNav = document.querySelector(".navbar-links__center");
  centerNav.addEventListener("click", function () {
    sideBar.classList.toggle("active");
    sidebarBtn.classList.toggle("toggle");
  });
  sidebarBtn.addEventListener("click", function () {
    sideBar.classList.toggle("active");
    sidebarBtn.classList.toggle("toggle");
  });
});
// nav button animation script
const contactButton = document.querySelector(".navbar__contact");
const circleContact = document.querySelector(".back-to a:nth-child(2)");





// PROJECT POP UP SCRIPT
function openDialog(boxNumber) {
  var dialog = document.getElementById('dialog' + boxNumber);
  dialog.showModal();
}
function closeDialog(boxNumber) {
  var dialog = document.getElementById('dialog' + boxNumber);
  dialog.close();
}





// Smooth Scroll script
document.addEventListener("DOMContentLoaded", function () {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500, // Adjust the scroll speed as needed
    offset: function (anchor, toggle) {
      // Calculate the offset dynamically based on the screen width
      if (window.innerWidth < 370) {
        return 55; // Offset for screens narrower than 370px
      } else if (window.innerWidth < 500) {
        return 65; // Offset for screens between 370px and 500px
      } else if (window.innerWidth < 700) {
        return 75; // Offset for screens between 500px and 700px
      } else if (window.innerWidth < 852) {
        return 85; // Offset for screens between 700px and 852px
      } else if (window.innerWidth < 992) {
        return 95; // Offset for screens between 852px and 992px
      } else {
        return 0 + "70px"; // Default offset for larger screens
      }
    },
  });
});





// Contact script
let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputMessage = document.getElementById('textarea')
window.addEventListener('load', () => {
  // window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
  inputName.value = "";
  inputEmail.value = "";
  inputMessage.value = "";

  // Hide the preloader
  document.getElementById("preloader").style.display = "none";

  // Show the main content
  document.getElementById("content").style.display = "block";

});




// Form validation script
// Use this script to redirect to the custom thank-you page
// document.getElementById('myForm').addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent default form submission
//   const form = event.target;
//   const data = new FormData(form);
//   fetch(form.action, {
//     method: form.method,
//     body: data,
//     headers: {
//       'Accept': 'application/json'
//     }
//   }).then(response => {
//     if (response.ok) {
//       window.location.href = "#"; // Redirect to your custom thank you page
//     } else {
//       alert('There was an error submitting the form.');
//     }
//   }).catch(error => {
//     alert('There was an error submitting the form.');
//   });
// });





// THANK YOU PAGE SCRIPT
// Function to start the confetti animation
function startConfettiAnimation() {
  let confetti_container = document.querySelector(".thank-you");
  let animItem = bodymovin.loadAnimation({
    wrapper: confetti_container,
    animType: "svg",
    loop: false,
    autoplay: false,
    path: "https://lottie.host/6dc5f5b5-8697-4e9d-b781-127bc2c459fd/Crhu8Rzi3M.json",
  });
  // Play the animation
  animItem.play();
}