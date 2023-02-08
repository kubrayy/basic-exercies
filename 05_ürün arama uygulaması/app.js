let product_1 = {
  name : "Monster Abra A5 V16.7.3 Intel Core",
  category : "technology",
  price : 15.998
}
let product_2 = {
  name : "Huawei Matebook D15 AMD Ryzen 5-5500U 8GB 512GB",
  category : "tecnology",
  price : 12.498
}
let product_3 = {
  name : "Apple Macbook Pro 13.3 Inç ",
  category : "tecnology",
  price : 27.000
}
let product_4 = {
  name : "ACER Aspire3 A315-56-327t Intel Core",
  category : "tecnology",
  price : 7700
}
let product_5 = {
  name : "Apple Macbook Air 13'",
  category : "tecnology",
  price : 19.700
}

let products = [product_1,product_2,product_3,product_4,product_5];
let filteredProducts = [];
let userProductName = prompt("Ürün ismi giriniz");

getFilteredProducts(products);
writeFilteredProducts(filteredProducts);

function getFilteredProducts(products){
products.forEach(function(product){
  if(product.name.toUpperCase().includes(userProductName.toUpperCase(),0)){
    filteredProducts.push(product);
  }
});
}

function writeFilteredProducts(products){
  products.forEach(function(product){
    console.log("************************************************ ");
    console.log("|" + product.name + "|" + product.category + "|" + product.price);
    console.log("************************************************ ");
  });
}