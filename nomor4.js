const dataPenjualanPakAldi = [
    {
        namaProduct : "Sepatu Futsal Nike Vapor Academy 8",
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90
    },
    {
        namaProduct : "Sepatu Warrior Tristan Black Brown High",
        hargaSatuan : 968000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 37
    },
    {
        namaProduct : "Sepatu Warrior Tristan Maroon High",
        kategori : "Sepatu Sneaker",
        hargaSatuan : 360000,
        totalTerjual : 90
    },
    {
        namaProduct : "Sepatu Warrior Rainbow Tosca Corduroy",
        hargaSatuan : 120000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90
    }
]

//Looping for sum
// hitungPenjualan=(dataPenjualan)=>{
//     if(typeof(dataPenjualan) !== 'object'){
//         console.log("ERROR : Invalid Input")
//     }
//     else if (typeof(dataPenjualan === 'object')){
//     let hasil = 0
//     for (let i = 0; i < dataPenjualan.length; i++) {
//         hasil += dataPenjualan[i].totalTerjual
//     }
//     console.log("Hasil Penjualan = ", hasil) 
// }
// }

//mapping for sum
hitungPenjualan=(dataPenjualan)=>{
    if(typeof(dataPenjualan) !== 'object'){
        console.log("ERROR : Invalid Input")
    }
    else if(typeof(dataPenjualan) === 'object'){
        let sum = 0
        dataPenjualan.map((value)=>{
            sum += value.totalTerjual
        }
        )
        console.log("Total Penjualan Pak Aldi : ", sum)
    }
}

hitungPenjualan(dataPenjualanPakAldi)