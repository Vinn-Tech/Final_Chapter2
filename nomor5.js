const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

// Menggunakan library JavaScript Intl.NumberFormat untuk format rupiah otomatis
let rupiahFormat = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
})

hitungNovel=(data)=>{
    // Bagian deklarasi variabel lokal yang digunakan di dalam function
    let totalKeuntungan = 0
    let totalModal = 0
    let persentase = 0
    bukuTerlaris = 0
    terjualTerbanyak = 0

    data.map((value)=>{
    // Menghitung total keuntungan
    hitungPerProduk = (value.hargaJual - value.hargaBeli) * value.totalTerjual
    totalKeuntungan += hitungPerProduk

    // Menghitung total modal
    totalModal += value.hargaBeli * value.totalTerjual
    
    // Menghitung persentase keuntungan
    persentase = (totalKeuntungan / totalModal) * 100

    // Mencari buku terlaris
    if (value.totalTerjual > terjualTerbanyak) {
    bukuTerlaris = value; // agar dapat memanggil object di array saat di luar map
    terjualTerbanyak = value.totalTerjual;
    }
})

    // Hasil Output
    return `
    Total Keuntungan    : ${rupiahFormat.format(totalKeuntungan)}
    Total Modal         : ${rupiahFormat.format(totalModal)}
    Persentase          : ${Math.floor(persentase)}% 
    Buku Terlaris       : "${bukuTerlaris.namaProduk}" terjual sebanyak ${bukuTerlaris.totalTerjual} buku
    Penulis Terlaris    : ${bukuTerlaris.penulis}
    `
    // Keterangan:
    // 1. Memanggil variabel rupiahFormat yang berisi library untuk mengubah tipe data number menjadi format rupiah secara otomatis
    // 2. Menggunakan fungsi Math.floor untuk menghilangkan angka di belakang koma agar dibulatkan untuk persentase keuntungannya
}

console.log(hitungNovel(dataPenjualanNovel))