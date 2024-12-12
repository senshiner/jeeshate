console.info("Function biasa");
function say(nama){
  console.info(`Hallo saya ${nama}, asal Indonesia`)
};
say("Sean");

console.info("Function Constructor")
function Person(){
  this.name = "";
  this.asal = "";
};
const Owner = new Person();
Owner.name = "Sean";
Owner.asal = "Jakarta";