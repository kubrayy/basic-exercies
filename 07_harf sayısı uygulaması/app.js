let metin = "Şu anda istanbulda kar yağıyor.";
let harf = prompt("lütfen harfi giriniz");
let sonuc = bul(harf);
alert("harf sayısı: " + sonuc);


function bul(harf){
  let toplam = 0;
  for(let i = 0; i<metin.length; i++){
    if(metin.charAt(i).toLowerCase()==harf.toLowerCase()){
      toplam+=1;
    }
    return toplam;
  }
}


//*------------------------------



// let metin = "Şu anda istanbulda kar yağıyor.";

// bul("a");
// bul("f");
// bul("Ş");
// bul("Ğ");


// function bul(harf){
//   let toplam = 0;
//   for(let i = 0; i<metin.length; i++){
//     if(metin.charAt(i).toLowerCase()==harf.toLowerCase()){
//       toplam+=1;
//     }
//   }
//   console.log("harf sayısı: "+ toplam);
// }
//!Kullanıcıdan değer almadan metin içindeki karakterleri çağırdık direkt.
//! fonksiyonlar tanımlandıktan sonra da önce de çağırılabilir.