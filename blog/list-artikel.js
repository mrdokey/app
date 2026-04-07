const daftarArtikel = [
    {
        judul: "Solusi Rental Motor di Canggu & Seminyak",
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
    },
    {
        judul: "Otomasi WhatsApp Gateway",
        kategori: "Automation",
        warnaBadge: "bg-success",
        deskripsi: "Kirim tagihan otomatis tanpa ketik manual. Efisiensi admin naik 100%...",
        link: "otomasi-whatsapp-gateway-bisnis.html"
    }
];

// Pastikan DOM sudah siap
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('blog-list');
    if (container) {
        container.innerHTML = ""; // Hapus spinner loading
        
        daftarArtikel.forEach(artikel => {
            container.innerHTML += `
                <div class="col-md-6 col-lg-4">
                    <div class="card card-blog shadow-sm">
                        <div class="card-body">
                            <span class="badge ${artikel.warnaBadge} badge-category text-dark">${artikel.kategori}</span>
                            <h5 class="card-title fw-bold">${artikel.judul}</h5>
                            <p class="card-text text-muted small">${artikel.deskripsi}</p>
                            <a href="${artikel.link}" class="btn btn-outline-primary btn-sm btn-read">Baca Artikel</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }
});
