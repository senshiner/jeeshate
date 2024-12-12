console.info("Function biasa");
function say(nama){
  console.info(`Hallo saya ${nama}, asal Indonesia`)
};
say("Sean");

console.info("Function Constructor")
function Person(nama,umur,clan){
  this.nama = nama;
  this.umur = umur;
  this.clan = function(){
    console.log(`${this.nama} dari clan Tempest`)
  }
  this.asal = "";
  this.hallo = function(he){
    console.log(`Hallo ${he}, saya ${this.nama}`)
  }
};
const Owner = new Person("Sean","18",);
Owner.asal = "Jakarta";
const Member = new Person("Isagi",,);
Member.hallo("Joko");
console.log(Owner)
console.log(Member)