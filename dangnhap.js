document.getElementById("submit").addEventListener("click", function (f) {
    f.preventDefault();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    if (username === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    alert("Gửi thành công!");
    document.querySelector("form").reset();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.location.href = "index.html";
});
