/* 
Bölen sayıların toplamı, girilen sayının 2 katına eşit olan uygulama.
6 = 1, 2, 3, 6 ile tam bölünebilmektedir.
1 + 2 + 3 + 6 = 12
6*2 = 12
*/


isPerfectNumber(6);
isPerfectNumber(28);
isPerfectNumber(496);
isPerfectNumber(8128);
isPerfectNumber(9);

function isPerfectNumber(number){
  let toplam = 0;
  for(let i = 2; i<=number/2; i++){
    if(number%i == 0){
      toplam+=i;
    }
  }
  toplam+=1+number;

  if(toplam==number*2){
    console.log("mükemmel sayıdır");
  }else{
    console.log("mükemmel sayı değildir");
  }
}