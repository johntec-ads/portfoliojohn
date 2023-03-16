function openNav() {
  let x = document.getElementById("navigation");
  if (x.className === "navigation") {
    x.className += " menujs";
    document.getElementById("threeline-icon").innerHTML = '&#8617;';
  } else {
    x.className = "navigation"
    document.getElementById("threeline-icon").innerHTML = '&#9776;';

  }
}