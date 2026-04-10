// Cek apakah script terpanggil
console.log("Script list-artikel.js mulai jalan... Uhuy!");

const daftarArtikel = [
      {
        judul: "Keuntungan Sewa Motor Matic untuk Keliling Bali",
        kategori: "Tips Rental",
        warnaBadge: "success",
        link: "artikel16.html"
    },
    {
        judul: "Cara Cek Kondisi Mesin Motor Sebelum Disewa",
        kategori: "Edukasi",
        warnaBadge: "primary",
        link: "artikel17.html"
    },
    {
        judul: "Pentingnya Integrasi WhatsApp Automation di Bisnis Rental",
        kategori: "Teknologi",
        warnaBadge: "info",
        link: "artikel18.html"
    },
    {
        judul: "Syarat Sewa Motor di Bali untuk Wisatawan Lokal",
        kategori: "Informasi",
        warnaBadge: "warning",
        link: "artikel19.html"
    },
    {
        judul: "Inovasi Dashboard Keuangan Real-Time dengan AppSheet",
        kategori: "Teknologi",
        warnaBadge: "danger",
        link: "artikel20.html"
    },
  {
    judul: "Kenapa Owner Rental di Bali Harus Pensiun Pakai Buku Catatan?",
    kategori: "Digitalisasi",
    warnaBadge: "bg-danger text-white",
    deskripsi: "Risiko pakai buku manual itu nyata. Dari kena tumpahan kopi sampai data hilang. Waktunya beralih ke sistem digital...",
    link: "artikel13.html"
  },
  {
    judul: "Rahasia Anti-Gondol: Verifikasi Penyewa di Era Digital",
    kategori: "Keamanan",
    warnaBadge: "bg-dark text-white",
    deskripsi: "Bikin penyewa nakal gemetar dengan sistem verifikasi identitas otomatis yang terintegrasi di aplikasi rental Anda...",
    link: "artikel14.html"
  },
  {
    judul: "Satu Aplikasi Semua Bisa: Rental Motor & Penginapan Jadi Satu",
    kategori: "Otomasi",
    warnaBadge: "bg-success text-white",
    deskripsi: "Kelola armada motor dan stok kamar homestay dalam satu genggaman. Efisiensi maksimal untuk operasional UMKM Bali...",
    link: "artikel15.html"
  },
    {
    judul: "Berapa Lama Durasi Pembuatan Aplikasi Kustom?",
    kategori: "Consulting",
    warnaBadge: "bg-secondary text-white",
    deskripsi: "Estimasi waktu pengembangan sistem AppSheet dan otomasi WhatsApp dari nol hingga siap pakai...",
    link: "durasi-pembuatan-aplikasi-kustom.html"
    },
    
    {
        judul: "Solusi Digital Rental Motor di Canggu & Seminyak",
        kategori: "Bali Business",
        warnaBadge: "bg-warning",
        deskripsi: "Tingkatkan efisiensi pengelolaan armada rental di area padat wisatawan dengan sistem digital...",
        link: "solusi-rental-motor-canggu-seminyak.html"
    },
    {
        judul: "Cara Pantau Bisnis dari Jauh Tanpa Harus ke Kantor",
        kategori: "Otomasi",
        warnaBadge: "bg-primary",
        deskripsi: "Owner bisnis di Bali kini bisa pantau laporan keuangan dan stok barang real-time dari smartphone...",
        link: "pantau-bisnis-dari-jauh.html"
    },
    {
        judul: "Integrasi Pembayaran Tripay untuk UMKM Bali",
        kategori: "Fintech",
        warnaBadge: "bg-success",
        deskripsi: "Terima pembayaran QRIS dan Virtual Account otomatis untuk usaha rental atau toko Anda...",
        link: "integrasi-pembayaran-tripay-bali.html"
    },
    {
        judul: "Transformasi Digital Laundry & Spa di Ubud",
        kategori: "Sistem Kasir",
        warnaBadge: "bg-info",
        deskripsi: "Bagaimana sistem kasir kustom membantu manajemen operasional jasa pariwisata di Ubud...",
        link: "sistem-kasir-laundry-spa-ubud.html"
    },
    {
        judul: "Mengapa Pengusaha Bali Harus Punya Aplikasi Kustom?",
        kategori: "Expertise",
        warnaBadge: "bg-dark",
        deskripsi: "Bedanya aplikasi pasaran dengan sistem kustom dari MRD Digital Solution untuk skala bisnis...",
        link: "keunggulan-aplikasi-kustom-bali.html"
    }
];

// Fungsi untuk render
function renderBlog() {
    const container = document.getElementById('blog-list');
    
    if (container) {
        console.log("Container ketemu, mulai render...");
        container.innerHTML = ""; // Hapus Spinner

        daftarArtikel.forEach(artikel => {
            const card = `
                <div class="col-md-6 col-lg-4">
                    <div class="card card-blog shadow-sm h-100">
                        <div class="card-body">
                            <span class="badge ${artikel.warnaBadge} mb-2">${artikel.kategori}</span>
                            <h5 class="card-title fw-bold">${artikel.judul}</h5>
                            <p class="card-text text-muted small">${artikel.deskripsi}</p>
                            <a href="${artikel.link}" class="btn btn-outline-primary btn-sm rounded-pill">Baca Artikel</a>
                        </div>
                    </div>
                </div>`;
            container.innerHTML += card;
        });
        console.log("Render selesai! Mantap.");
    } else {
        console.log("Waduh, container 'blog-list' nggak ketemu!");
    }
}

// Jalankan fungsi
renderBlog();
