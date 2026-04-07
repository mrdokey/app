// Cek apakah script terpanggil
console.log("Script list-artikel.js mulai jalan... Uhuy!");

const daftarArtikel = [
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
