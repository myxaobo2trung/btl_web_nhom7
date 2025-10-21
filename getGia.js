document.querySelectorAll(".xe-item button").forEach(button => {
    button.addEventListener("click", function () {
        const xeItem = this.closest(".xe-item");
        const gia = xeItem.querySelector(".price").innerText.trim();
        localStorage.setItem("giaXeDaChon", gia);

        const popup = document.getElementById("xePopup");
        const popupGia = document.getElementById("popup-gia");
        const muaNgayBtn = document.getElementById("muaBtn");
        const closeBtn = document.querySelector(".popup .close");


        if (popup && popupGia) {
            popupGia.innerText = gia;
            popup.style.display = "block";
        }
        if (muaNgayBtn) {
            muaNgayBtn.onclick = function () {
                popup.style.display = "none";
                window.location.href = "dathang.html";
            };
        }

        if (closeBtn) {
            closeBtn.onclick = function () {
                popup.style.display = "none";
            };
        }
    });
});
