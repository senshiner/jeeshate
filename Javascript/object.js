console.info("Object Learning, Run in HTML Inspect ");
const orang = {};
orang["nama"] = "Sen";
orang["alamat"] = "Indo";
orang["umur"] = 19;
console.table(orang);
delete orang["umur"];
console.table(orang);

const person = {
    nama: "Sean",
    "alamat negara": "indo",
    umur: 19,
};
console.log(`Nama : ${person.nama}`);
person.nama = "Sen";
console.table(person);
delete person.umur;
console.table(person);