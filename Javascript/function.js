console.info("Function Learning");

/*function bio (nama){
  console.log("halo, saya "+ nama +", senang berkenalan")
};
bio("Sean");

function kalidua(a){
  return a*2;
};
let hasil = kalidua(5);
console.log(hasil);

function luasPersegi(s){
  return s * s;
};
let jumlah = luasPersegi(7);
console.log(jumlah);*/

function cekNum(a){
  if(a%2 === 0){
    console.log("Genap");
  }else{
    console.log("Ganjil");
  };
};
cekNum(6);

function hargaDiskon(harga, diskon){
  const potongan = (harga * diskon) /100;
  return harga - potongan;
};
console.log(hargaDiskon(10000, 20));

function intro (nama, umur){
  console.log(`Halo, saya ${nama} dan umur saya ${umur} tahun.`)
}
intro("Budi",10)

function luasSegitiga(alas, tinggi){
  const luas = 1/2 * alas * tinggi;
  console.log(luas);
}
luasSegitiga (3,5)