function toggleTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    element.classList.toggle("dark-button")

}

let buttonVariable = document.getElementById("toggleButton");
buttonVariable.onclick = toggleTheme;
