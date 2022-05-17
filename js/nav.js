window.addEventListener("load", init)

function init() {
    const toggle = document.querySelector("#sidebar .toggle-btn");
    toggle.addEventListener("click", show);
    function show() {
        document.getElementById("sidebar").classList.toggle("active");
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns =
        document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };