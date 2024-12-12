console.info("Function biasa");
function say(nama){
  console.info(`Hallo saya ${nama}, asal Indonesia`)
};
say("Sean");

console.info("Function Constructor")
function Person(nama,umur = null){
  this.nama = nama; 
  this.umur = umur; // 1
  this.asal = ""; // 2
  this.hallo = function(he){ // 3
    console.log(`Hallo ${he}, saya ${this.nama}`)
  };
};
const Owner = new Person("Sean","18");
Owner.asal = "Jakarta";
const Member = new Person("Isagi");// umur null
Member.hallo("Joko");
console.log(Owner)
console.log(Member)

console.info("Function class")
class Mobil{
  merek = ""; // 1
  constructor(warna){
    this.tahun = ""; // 2
    this.warna = warna; // 3
    // jangan gunakan function disini!!
  }
  kata(){ // 4
    console.info(`Ini mobil baruku ${avanza.merek}`)
  }
}
const avanza = new Mobil("hitam")
avanza.merek = "avanza";
avanza.tahun = "1990";
avanza.kata();
console.log(avanza)