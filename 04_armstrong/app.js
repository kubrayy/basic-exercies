let sayi = prompt("lütfen bir sayı giriniz:");
let toplam = 0;

for(let i = 0; i<sayi.length; i++){
  let rakam = sayi.charAt(i);
  toplam = rakam*rakam*rakam;
}
if (Number(sayi)==toplam) {
  alert("armstrong sayısıdır")
}else{
  alert("armstrong sayısı değildir")
}