const openButton = document.getElementById('open-invitation');
const overlay = document.getElementById('overlay');
const hero = document.querySelector('.hero'); // dapatkan container hero

openButton.addEventListener('click', function(event) {
    event.preventDefault(); // Cegah link untuk tidak langsung pindah halaman
     hero.classList.add('opening'); // tambahkan class 'opening' ke container hero
     overlay.style.display = 'block'; // tampilkan overlay
    // setelah animasi selesai
    hero.addEventListener('animationend', function() {
        window.location.href = 'inti.html'; // pindah ke inti.html
    }, { once: true }); // agar event listener hanya berjalan sekali
});