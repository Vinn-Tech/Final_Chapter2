getAngkaTerbesarKedua=(personName)=>{
if (!personName) {
    return `Bro, where is the parameter`
}
else {
    if (typeof personName !== "object") {
        return "Error : Invalid Input";
    } // Untuk validasi parameter harus berupa array

    if (personName.length < 2) {
        return "Array minimal berisikan 2 data";
    } // Untuk validasi array harus berisikan minimal 2 data

    let max = 0;
    let secondMax = 0;

    for (let i = 0; i < personName.length; i++) {
        if (personName[i] > max) {
            secondMax = max;
            max = personName[i];
        } else if (personName[i] !== max && (secondMax === null || personName[i] > secondMax)) {
            secondMax = personName[i];
        }
    }
    if (secondMax === null) {
        return "Tidak ada nilai terbesar kedua dalam array ini";
    }
    return (hasil = `Nilai terbesar kedua dari array tersebut adalah = ${secondMax}`);
}
}

const arr = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(arr));
// console.log(getAngkaTerbesarKedua(0)) // Akan menghasilkan output Error : Invalid Input, karena parameter tidak bertipe data array atau object
// console.log(getAngkaTerbesarKedua()) // Akan menghasilkan output Bro, where is the parameter, karena function tidak diberikan parameter