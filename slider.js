// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// let currentIndex = 0; // Indeks slide saat ini
// let autoSlideInterval;

// // Fungsi untuk mengatur slide aktif
// function updateActiveSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.toggle('active', i === index);
//     });
// }

// // Fungsi untuk pindah ke slide berikutnya
// function goToNextSlide() {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     updateActiveSlide(currentIndex);
// }

// // Fungsi untuk memulai slide otomatis
// function startAutoSlide() {
//     autoSlideInterval = setInterval(goToNextSlide, 4000);
// }

// // Memulai slide otomatis saat halaman dimuat
// updateActiveSlide(currentIndex);
// startAutoSlide();

let currentIndex = 0;
const images = ["img/3.jpg", "img/2.jpg", "img/4.jpg"];
const heroSection = document.querySelector(".hero");

if (heroSection) {
    // Gunakan let agar bisa ditukar di dalam fungsi
    let bgLayer = document.createElement("div");
    let bgLayerNext = document.createElement("div");

    [bgLayer, bgLayerNext].forEach(layer => {
        layer.classList.add("bg-layer");
        layer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0;
            transition: opacity 2s ease-in-out;
            z-index: -1;
        `;
        heroSection.appendChild(layer);
    });

    bgLayer.style.backgroundImage = `url('${images[currentIndex]}')`;
    bgLayer.style.opacity = "1"; // Layer pertama langsung tampil

    function changeBackground() {
        const nextIndex = (currentIndex + 1) % images.length;

        // Terapkan gambar baru pada layer berikutnya
        bgLayerNext.style.backgroundImage = `url('${images[nextIndex]}')`;
        bgLayerNext.style.opacity = "1"; // Munculkan layer baru

        // Tunggu animasi selesai, lalu tukar posisi layer
        setTimeout(() => {
            bgLayer.style.opacity = "0"; // Hilangkan layer lama

            // Tukar referensi layer agar selalu smooth
            [bgLayer, bgLayerNext] = [bgLayerNext, bgLayer]; // ✅ Sekarang bisa karena pakai let
            currentIndex = nextIndex;
        }, 2000); // Sesuai dengan transition 2s
    }

    // Jalankan interval untuk perubahan background otomatis
    setInterval(changeBackground, 5000); // Ganti gambar setiap 5 detik
}


