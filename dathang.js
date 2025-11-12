// lấy giá xe và tên hàng từ local storage
const giaXe = localStorage.getItem("giaXeDaChon");
const tenHang = localStorage.getItem("tenDaChon");
const soluongInput = document.getElementById("soluong");
const giaElem = document.getElementById("gia");
//in ra ở web
if (tenHang) document.getElementById("ten").innerText = "Tên mặt hàng: " + tenHang;
if (giaXe) giaElem.innerText = "Tổng tiền: " + giaXe;
// hàm tính tổng
function tinhTong() {
    const sl = Number(soluongInput.value) || 0; // lấy giá trị ng dùng nhập vào ô sluong, nếu mà ô rỗng thì coi sl = 0
    const giaSo = Number(giaXe.replace(/\D/g, "")); // xóa hết các ký tự không phải số (vd: . đ)
    const tong = giaSo * sl; // tổng tiền sẽ bằng đơn giá nhân với sl
    giaElem.innerText = "Tổng tiền: " + tong.toLocaleString("vi-VN") + "đ";
}
//gọi hàm tính tổng lần đầu
tinhTong();
//cập nhật cộng tiền nếu thay đổi sluong
soluongInput.addEventListener("input", tinhTong);
// validate khi nhấn đặt hàng
document.getElementById("dathang").addEventListener("click", function (e) {
    e.preventDefault();

    const nguoinhan = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const diachi = document.getElementById("diachi").value.trim();
    const checkedVC = document.querySelector('input[name="vanchuyen"]:checked');
    const checkedTT = document.querySelector('input[name="thanhtoan"]:checked');
    const sl = Number(soluongInput.value);

    if (!nguoinhan || !phone || !diachi) return alert("Vui lòng nhập đầy đủ thông tin!");
    if (!checkedVC) return alert("Vui lòng chọn phương thức vận chuyển!");
    if (!checkedTT) return alert("Vui lòng chọn phương thức thanh toán!");
    if (sl === 0) return alert("Vui lòng nhập số lượng!");

    alert("Đặt hàng thành công!");
    window.location.href = "index.html";
});

