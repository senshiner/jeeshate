console.info("JSON Learning, Run in HTML Inspect ");
//========================================
const data = {
    name: "Sean",
    age: 30,
    skills: ["JavaScript", "Python", "C++"]
};
console.log(data);

//ubah objek ke json string
const jsonString = JSON.stringify(data);
console.log(jsonString);

//ubah string ke objek json
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);