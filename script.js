const sidebar = document.querySelector("#sidebar");
const btn = document.querySelector("#btn");
const searchBtn = document.querySelector("#search");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}

searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}