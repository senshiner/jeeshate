console.info("Array Learning, Run in HTML Inspect ")
let kontak = [];
kontak.push("nama", "alamat", "umur");
kontak.push("email", "nomor");
console.table(kontak);
delete kontak[3];
console.table(kontak);
kontak.push("TTL");
kontak[3] = "email";
console.table(kontak);
kontak.push(["tempat", "tanggal lahir"]);
console.table(kontak);
negara = [["Indonesia","Singapura"],["Rusia","Amerika","Australia"]];
console.table(negara)
console.log("Jumlah array = " + kontak.length)