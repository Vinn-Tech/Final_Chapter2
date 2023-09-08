checktypeNumber=(givenNumber)=>{
    if (!givenNumber) {
        return `Bro, where is the parameter`
    }
    else{
    if (typeof(givenNumber) !== 'number'){
        return hasil = "Error : Invalid input"
    } // Untuk validasi parameter agar yang input untuk parameter harus bertipe data number

    if (givenNumber % 2 == 0){
        return hasil = "GENAP"
    } else if (givenNumber % 2 != 0){
        return hasil = "GANJIL"
    }
}
}
console.log(checktypeNumber(2000))
// console.log(checktypeNumber("3")) //Akan menghasilkan output Error : Invalid input
// console.log(checktypeNumber({})) //Akan menghasilkan output Error : Invalid input
// console.log(checktypeNumber([])) //Akan menghasilkan output Error : Invalid input
// console.log(checktypeNumber()) //Akan menghasilkan output Bro, where is the parameter