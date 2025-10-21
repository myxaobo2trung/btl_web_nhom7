let index = 0;
const list = document.querySelector(".list-img");
const imgs = document.querySelectorAll(".list-img img");
const total = imgs.length;
const num = document.getElementById("slideNumber");
function setup() {
    list.style.width = `${total * 100}%`;
    imgs.forEach(img => {
        img.style.width = `${100 / total}%`;
        img.style.objectFit = "cover";
    });
}
setup();
window.addEventListener("resize", setup);
function showSlide(i) {
    index = (i + total) % total;
    list.style.transform = `translateX(-${(index * 100) / total}%)`;
    if (num) num.textContent = `${index + 1} / ${total}`;
}
document.querySelector(".next").onclick = () => { showSlide(index + 1); resetAuto(); };
document.querySelector(".prev").onclick = () => { showSlide(index - 1); resetAuto(); };
let auto = setInterval(() => showSlide(index + 1), 6000);
function resetAuto() {
    clearInterval(auto);
    auto = setInterval(() => showSlide(index + 1), 6000);
}
showSlide(0);
