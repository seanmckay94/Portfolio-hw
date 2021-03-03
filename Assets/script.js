/* Toggle between adding and removing the "responsive" class to topnav and bottomnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav, myBottomnav");
    if (x.className === "topnav, bottomnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav, bottomnav";
    }
  }