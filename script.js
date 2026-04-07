const htmlElement = document.documentElement;
const themeToggleBtns = document.querySelectorAll('.btnDarkToggle');

// 2. Fungsi untuk mengubah tampilan SEMUA tombol agar sinkron
function updateButtonUI(theme) {
    themeToggleBtns.forEach(btn => {
        if (theme === 'dark') {
            btn.classList.replace('bi-brightness-high-fill', 'bi-moon-fill');
        } else {
            btn.classList.replace('bi-moon-fill', 'bi-brightness-high-fill');
        }
    });
}

// Deteksi tema sistem saat halaman dimuat
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (systemPrefersDark) {
    htmlElement.setAttribute('data-bs-theme', 'dark');
    updateButtonUI('dark');
} else {
    htmlElement.setAttribute('data-bs-theme', 'light');
    updateButtonUI('light');
}

// 4. Tambahkan aksi klik pada MASING-MASING tombol
themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        htmlElement.setAttribute('data-bs-theme', newTheme);
        // Panggil fungsi updateUI agar semua tombol ikut berubah secara bersamaan
        updateButtonUI(newTheme);
    });
});

// Opsional: Deteksi perubahan sistem secara real-time
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newSystemTheme = event.matches ? 'dark' : 'light';
    htmlElement.setAttribute('data-bs-theme', newSystemTheme);
    updateButtonUI(newSystemTheme);
});