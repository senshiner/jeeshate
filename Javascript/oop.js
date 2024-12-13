//=======================================
console.info("Function biasa");
function say(nama){
  console.info(`Hallo saya ${nama}, asal Indonesia`)
};
say("Sean");
//=======================================
console.info("Function Constructor")
function Person(nama,umur = null){
  this.nama = nama; 
  this.umur = umur; // 1
  this.asal = ""; // 2
  this.hallo = function(he){ // 3
    console.log(`Hallo ${he}, saya ${this.nama}`)
  };
};
const owner = new Person("Sean","18");
owner.asal = "Jakarta";
const member = new Person("Isagi");// umur null
member.hallo("Joko");
console.log(owner)
console.log(member)
//=======================================
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
//=======================================
console.info("Function Inherits");
class Employee{
  sayHello(name){
    console.info(`Hallo ${name}, my name is Manager ${this.say}`)
  }
}
class Manager extends Employee{
  sayHello(name){
    console.info(`Hallo ${name}, my name is Employee ${this.say}`)
  }
}
const sean = new Employee();
sean.say = "Sean"
sean.sayHello("Joko")
const budi = new Manager();
budi.say = "Budi"
budi.sayHello("Joko")
console.log(sean);
console.log(budi);