var nav = document.getElementById("nav")
var menu = document.getElementById("menu")
var span = document.getElementsByTagName("span")

menu.addEventListener("click", () => {
    if (nav.style.width == "85px") {
        nav.style.width = "300px"
        for (i = 0; i < 7; i++) {
            span[i].style.display = "block"
        }
    } else {
        nav.style.width = "85px"
        for (i = 0; i < 7; i++) {
            span[i].style.display = "none"
        }
    }
})