// 버튼 클릭해서 이동하고 애니메이션 주기
const $btn = document.querySelectorAll(".header_nav ul li a");

$btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const $href = document.querySelector(btn.getAttribute("href"));
        $href.scrollIntoView({ behavior: "smooth" });
    });
});
