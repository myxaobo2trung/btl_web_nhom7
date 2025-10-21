// Hiển thị giá xe đã chọn
window.addEventListener("DOMContentLoaded", function () {
    const giaXe = localStorage.getItem("giaXeDaChon");
    if (giaXe) {
        document.getElementById("gia").innerText = "Giá: " + giaXe;
    }
});
document.getElementById("dathang").addEventListener("click", function (e) {
    e.preventDefault();
    const nguoinhan = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const diachi = document.getElementById("diachi").value.trim();
    const checkedVC = document.querySelector('input[name="vanchuyen"]:checked');
    const checkedTT = document.querySelector('input[name="thanhtoan"]:checked');
    // Kiểm tra đầy đủ thông tin
    if (!nguoinhan || !phone || !diachi) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    if (!checkedVC) {
        alert("Vui lòng chọn phương thức vận chuyển!");
        return;
    }
    if (!checkedTT) {
        alert("Vui lòng chọn phương thức thanh toán!");
        return;
    }

    alert("Đặt hàng thành công!");
    window.location.href = "index.html";
});

