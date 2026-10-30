const show = document.querySelector(".header_nav");
const showBtn = document.querySelector("#headerToggle");

showBtn.addEventListener("click", (e) => {
    e.preventDefault();
    show.classList.toggle("show");
});
