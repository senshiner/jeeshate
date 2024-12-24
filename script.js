// Mendapatkan hari saat ini
const today = new Date();
const dayOfWeek = today.getDay(); // 0 = Minggu, 1 = Senin, ..., 6 = Sabtu

// Menentukan nama hari
const daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
let currentDay = daysOfWeek[dayOfWeek];

// Menampilkan hari saat ini
document.getElementById("currentDay").innerText = `Jadwal Hari Ini: ${currentDay}`;

// Menentukan jadwal berdasarkan hari
let schedule = {
  "Senin": {
    time1: "06:00 - 06:30",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur",
    time2: "07:30 - 08:00",
    meal2: "Olahraga Tangan & Punggung",
    time3: "12:00 - 13:00",
    meal3: "Makan Siang",
    time4: "16:00 - 17:00",
    meal4: "Camilan: Regal 1-2 keping dan roti 1/2 potong"
  },
  "Selasa": {
    time1: "06:00 - 06:30",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur",
    time2: "07:30 - 08:00",
    meal2: "Olahraga Kaki & Paha",
    time3: "12:00 - 13:00",
    meal3: "Makan Siang",
    time4: "16:00 - 17:00",
    meal4: "Camilan: Regal 1-2 keping dan roti 1/2 potong"
  },
  "Rabu": {
    time1: "06:00 - 06:30",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur",
    time2: "12:00 - 13:00",
    meal2: "Makan Siang",
    time3: "16:00 - 17:00",
    meal3: "Camilan: Regal 1-2 keping dan roti 1/2 potong",
    time4: "19:00 - 20:00",
    meal4: "Makan Malam"
  },
  "Kamis": {
    time1: "06:00 - 06:30",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur",
    time2: "07:30 - 08:00",
    meal2: "Olahraga Tangan & Punggung",
    time3: "12:00 - 13:00",
    meal3: "Makan Siang",
    time4: "16:00 - 17:00",
    meal4: "Camilan: Regal 1-2 keping dan roti 1/2 potong"
  },
  "Jumat": {
    time1: "06:00 - 06:30",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur",
    time2: "07:30 - 08:00",
    meal2: "Olahraga Kaki & Paha",
    time3: "12:00 - 13:00",
    meal3: "Makan Siang",
    time4: "16:00 - 17:00",
    meal4: "Camilan: Regal 1-2 keping dan roti 1/2 potong"
  },
  "Sabtu": {
    time1: "06:00 - 06:30",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur",
    time2: "12:00 - 13:00",
    meal2: "Makan Siang",
    time3: "16:00 - 17:00",
    meal3: "Camilan: Regal 1-2 keping dan roti 1/2 potong",
    time4: "19:00 - 20:00",
    meal4: "Makan Malam"
  },
  "Minggu": {
    time1: "06:00 - 06:30",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur",
    time2: "12:00 - 13:00",
    meal2: "Makan Siang",
    time3: "16:00 - 17:00",
    meal3: "Camilan: Regal 1-2 keping dan roti 1/2 potong",
    time4: "19:00 - 20:00",
    meal4: "Makan Malam"
  }
};

// Menampilkan jadwal sesuai dengan hari
document.getElementById("time1").innerText = schedule[currentDay].time1;
document.getElementById("meal1").innerText = schedule[currentDay].meal1;

document.getElementById("time2").innerText = schedule[currentDay].time2;
document.getElementById("meal2").innerText = schedule[currentDay].meal2;

document.getElementById("time3").innerText = schedule[currentDay].time3;
document.getElementById("meal3").innerText = schedule[currentDay].meal3;

document.getElementById("time4").innerText = schedule[currentDay].time4;
document.getElementById("meal4").innerText = schedule[currentDay].meal4;