  
 const activeNavbar = () => {
     // Get the container element
  const navContainer = document.querySelector(".nav-menu");

  // Get all buttons with class="btn" inside the container
  const navLinks = navContainer.getElementsByClassName("nav-link");

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");

      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }
 } 

 export { activeNavbar };
