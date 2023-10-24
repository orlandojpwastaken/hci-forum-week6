function onClick() {
  var x = document.getElementById("Navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function clickCircle() {
  const buttons = document.querySelectorAll(".circular-button");
  buttons.forEach(button => {
    button.addEventListener("click", function () {
        this.classList.toggle("clicked");
    });
})
}

function logOut() {
 var leave =  confirm("Are you sure you want to log out?")
 if(leave == true){
  location.assign("index.html")
 }
 
 }
