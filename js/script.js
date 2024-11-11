    // Script to hide the preloader after loading
    window.addEventListener("load", () => {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
      });

      //sricky navbar
var navBar = $("#topNav");
var hdrHeight = $("header").height();


$(window).scroll(function() {
  if( $(this).scrollTop() > hdrHeight + 50) {
    navBar.addClass("navScrolled");
  } else {
    navBar.removeClass("navScrolled");
  }
});




function filterEvents(category) {
  // Find the radio button with the ID matching the category
  const radioButton = document.getElementById(category);
  
  if (radioButton) {
    // Set the radio button to checked, which triggers the CSS to show the correct category
    radioButton.checked = true;
  }
}



function filterEvents(category) {
  const radioButton = document.getElementById(category);
  if (radioButton) {
    radioButton.checked = true;
    // Scroll to the events section
    document.querySelector('.events').scrollIntoView({ behavior: 'smooth' });
  }
}
