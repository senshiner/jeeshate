console.info("Function biasa");
function say(nama){
  console.info(`Hallo saya ${nama}, asal Indonesia`)
};
say("Sean");

console.info("Function Constructor")
function Person(nama,umur = null){
  this.nama = nama;
  this.umur = umur;
  this.asal = "";
  this.hallo = function(he){
    console.log(`Hallo ${he}, saya ${this.nama}`)
  };
};
const Owner = new Person("Sean","18");
Owner.asal = "Jakarta";
const Member = new Person("Isagi");
Member.hallo("Joko");
console.log(Owner)
console.log(Member)

console.info("Function class")
class Mobil{
  merek = "";
  warna = "";
  constructor(jenis){
    this.tahun = "";
  }
}
const avanza = new Mobil("sedan")
avanza.merek = "avanza";
avanza.warna = "hitam";
avanza.tahun = "1990";
console.log(avanza)