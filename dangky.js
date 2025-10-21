
document.getElementById("submit").addEventListener("click", function (f) {
    f.preventDefault();
    let username = document.getElementById("username").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("password-cf").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (username === "" || phone === "" || password === "" || confirmPassword === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    if (isNaN(phone)) {
        alert("Số điện thoại chỉ được nhập số!");
        return;
    }
    if (password !== confirmPassword) {
        alert("Mật khẩu không trùng khớp!");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Vui lòng nhập đúng định dạng email!");
        return;
    }
    alert("Gửi thành công!");
    document.querySelector("form").reset();
    window.location.href = "dangnhap.html";




});