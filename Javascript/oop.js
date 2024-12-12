console.info("Function biasa");
function say(nama){
  console.info(`Hallo saya ${nama}, asal Indonesia`)
};
say("Sean");

console.info("Function Constructor")
function Person(nama,umur,clan){
  this.nama = nama;
  this.umur = umur;
  this.clan = function(a){
    console.log(`${this.nama} dari clan ${a}`)
  };
  this.asal = "";
  this.hallo = function(he){
    console.log(`Hallo ${he}, saya ${this.nama}`)
  };
};
const Owner = new Person("Sean","18","01");
Owner.asal = "Jakarta";
const Member = new Person("Isagi","20","03");
Member.hallo("Joko");
console.log(Owner)
console.log(Member)