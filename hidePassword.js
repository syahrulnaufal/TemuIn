const togglePasswordBtn = document.getElementById('togglePassword');
const passwordInput = document.getElementById('passwordInput');

// Tangkap ikon 'i' di dalam tombol untuk mengubah gambarnya
const eyeIcon = togglePasswordBtn.querySelector('i');

// 2. Tambahkan event listener saat tombol diklik
togglePasswordBtn.addEventListener('click', function () {

    // 3. Cek apakah tipe input saat ini adalah 'password'
    const isPassword = passwordInput.getAttribute('type') === 'password';

    if (isPassword) {
        // Jika ya, ubah menjadi 'text' agar password terlihat
        passwordInput.setAttribute('type', 'text');

        // Ganti ikon mata terbuka menjadi mata dicoret
        eyeIcon.classList.remove('bi-eye');
        eyeIcon.classList.add('bi-eye-slash');
    } else {
        // Jika tidak (berarti sedang terlihat), ubah kembali ke 'password'
        passwordInput.setAttribute('type', 'password');

        // Ganti ikon mata dicoret menjadi mata terbuka
        eyeIcon.classList.remove('bi-eye-slash');
        eyeIcon.classList.add('bi-eye');
    }
});