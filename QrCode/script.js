function generateQRCode() {
    const input = document.getElementById('qr-input');
    const qrContainer = document.getElementById('qrcode');
    const qrResult = document.getElementById('qr-result');

    if (!input.value.trim()) {
        alert('Please enter a valid text or URL!');
        return;
    }

    qrContainer.innerHTML = ''; 
    const qrCode = new QRCode(qrContainer, {
        text: input.value,
        width: 200,
        height: 200,
        colorDark: "#000",
        colorLight: "#fff",
    });

    qrResult.style.display = 'block';
}

function resetQR() {
    const qrContainer = document.getElementById('qrcode');
    const qrResult = document.getElementById('qr-result');
    qrContainer.innerHTML = ''; 
    qrResult.style.display = 'none';
}
