window.addEventListener("load", init)

function init() {
    const toggle = document.querySelector("#sidebar .toggle-btn");
    toggle.addEventListener("click", show);
    function show() {
        document.getElementById("sidebar").classList.toggle("active");
/*         document.getElementsByClassName("kepDiv").style.zIndex = "-1"; */
    }
}

