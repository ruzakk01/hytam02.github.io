document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Password dan Konfirmasi Password tidak cocok!');
        return;
    }

    alert('Pendaftaran berhasil!');
    // Tambahkan kode untuk mengirim data ke server jika diperlukan
});