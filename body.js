function showPopup(xeItem) {
    const info = xeItem.querySelectorAll('.overlay a');
    const price = xeItem.querySelector('.price').innerText;

    document.getElementById('popup-nam').innerText = info[0].innerText.split(':')[1];
    document.getElementById('popup-dungtich').innerText = info[1].innerText.split(':')[1];
    document.getElementById('popup-mau').innerText = info[2].innerText.split(':')[1];
    document.getElementById('popup-gia').innerText = price;

    document.getElementById('xePopup').style.display = 'block';
}


document.querySelectorAll('.overlay').forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
        e.preventDefault();
        const xeItem = overlay.closest('.xe-item');
        showPopup(xeItem);
    });
});


document.querySelectorAll('.xe-item button').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const xeItem = btn.closest('.xe-item');
        showPopup(xeItem);
    });
});


document.querySelector('.close').onclick = function () {
    document.getElementById('xePopup').style.display = 'none';
};


window.onclick = function (event) {
    if (event.target == document.getElementById('xePopup')) {
        document.getElementById('xePopup').style.display = 'none';
    }
};