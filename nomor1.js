const changeWord=(selectedText, changedText, text)=>
{
   hasil = text.replaceAll(selectedText, changedText) // Menggunakan fungsi manipulasi string replaceAll bawaan JavaScript
   return hasil
}

let kalimat = "Nama saya Kevin"

console.log(changeWord("Kevin", "Angga", kalimat))