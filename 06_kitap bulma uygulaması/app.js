let book_1={name:"Şeker Portakalı",author :"José Mauro de Vasconcelos",price:12, shelf:"1.1.Shelf"}
let book_2={name:"Küçük Prens",author:"Antoine de Saint-Exupéry",price:17,shelf:"3.1.Shelf"}
let book_3={name:"Hayvan Çiftliği",author:"George Orwell",price:56, shelf:"3.5.Shelf"
}
let book_4={name:"Aşkı Memnu",author:"Halit Ziya Uşaklıgil",price:34, shelf:"2.2.Shelf"}
let book_5={name:"İnsan Ne İle Yaşar",author:"Tolstoy",price:56, shelf:"3.4.Shelf"}

let books=[book_1,book_2,book_3,book_4,book_5];

let shelf_1_1={code:"1.1.Shelf",display:false}
let shelf_1_2={code:"1.2.Shelf",display:false}
let shelf_1_3={code:"1.3.Shelf",display:false}
let shelf_1_4={code:"1.4.Shelf",display:false}
let shelf_1_5={code:"1.5.Shelf",display:false}

let shelf_2_1={code:"2.1.Shelf",display:false}
let shelf_2_2={code:"2.2.Shelf",display:false}
let shelf_2_3={code:"2.3.Shelf",display:false}
let shelf_2_4={code:"2.4.Shelf",display:false}
let shelf_2_5={code:"2.5.Shelf",display:false}
 
let shelf_3_1={code:"3.1.Shelf",display:false}
let shelf_3_2={code:"3.2.Shelf",display:false}
let shelf_3_3={code:"3.3.Shelf",display:false}
let shelf_3_4={code:"3.4.Shelf",display:false}
let shelf_3_5={code:"3.5.Shelf",display:false}

let shelfs = [
  [shelf_3_1,shelf_3_2,shelf_3_3,shelf_3_4,shelf_3_5],
  [shelf_2_1,shelf_2_2,shelf_2_3,shelf_2_4,shelf_2_5],
  [shelf_1_1,shelf_1_2,shelf_1_3,shelf_1_4,shelf_1_5]
];

function createShelf(){
  console.clear();
  let line = "";
  for(let i = 0; i<shelfs.length; i++){
    for(let j=0; j<5; j++){
      line+="|" + (shelfs[i][j].display ? shelfs[i][j].code : "---") + "";
    }
    console.log(line);
    console.log("-----------------");
    line="";
  }
}
function findCode(bookName){
  let shelfCode=null;
  books.forEach(function(book){
    if(book.name.toUpperCase().includes(bookName.toUpperCase(),0)){shelfCode=book.shelf;
    }
  });
  return shelfCode;
}

function shelfDisplay(shelfCode){
  for(let i = 0; i<shelfs.length; i++){
    for(let j=0; j<5; j++){
      if(shelfs[i][j].code==shelfCode){
        shelfs[i][j].display=true;
        break;
      }
    }
  }
}

createShelf();

let bookName = prompt("lütfen bir kitap ismi giriniz");
let shelfCode = findCode(bookName);

if(shelfCode!=null){
  shelfDisplay(shelfCode);
  createShelf();
}else{
  alert("aradığınız kitap kütüphanemizde bulunmamaktadır")
}
