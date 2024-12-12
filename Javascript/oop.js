console.info("Function biasa");
function say(nama){
  console.info(`Hallo saya ${nama}, asal Indonesia`)
};
say("Sean");

console.info("Function Constructor")
function Person(){
  this.name = "";
  this.asal = "";
  this.hallo = function(he){
    console.log(`Hallo ${he}, saya ${this.name}`)
  }
};
const Owner = new Person();
Owner.name = "Sean";
Owner.asal = "Jakarta";
const Member = new Person();
Member.name = "Isagi";
Member.hallo("Joko");
console.log(Owner)
console.log(Member)