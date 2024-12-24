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
    time1: "07:30 - 08:00",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur",
    time2: "20:00 - 20:30",
    meal2: "Olahraga Tangan & Punggung",
    time3: "12:00 - 13:00",
    meal3: "Makan Siang",
    time4: "19:00 - 20:00",
    meal4: "Makan Malam"
  },
  "Selasa": {
    time1: "07:30 - 08:00",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur",
    time2: "20:00 - 20:30",
    meal2: "Olahraga Kaki & Paha",
    time3: "12:00 - 13:00",
    meal3: "Makan Siang",
    time4: "19:00 - 20:00",
    meal4: "Makan Malam"
  },
  "Rabu": {
    time1: "07:30 - 08:00",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur",
    time2: "20:00 - 20:30",
    meal2: "Olahraga Tangan & Punggung",
    time3: "12:00 - 13:00",
    meal3: "Makan Siang",
    time4: "19:00 - 20:00",
    meal4: "Makan Malam"
  },
  "Kamis": {
    time1: "07:30 - 08:00",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur",
    time2: "20:00 - 20:30",
    meal2: "Olahraga Tangan & Punggung",
    time3: "12:00 - 13:00",
    meal3: "Makan Siang",
    time4: "19:00 - 20:00",
    meal4: "Makan Malam"
  },
  "Jumat": {
    time1: "07:30 - 08:00",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur",
    time2: "20:00 - 20:30",
    meal2: "Olahraga Kaki & Paha",
    time3: "12:00 - 13:00",
    meal3: "Makan Siang",
    time4: "19:00 - 20:00",
    meal4: "Makan Malam"
  },
  "Sabtu": {
    time1: "07:30 - 08:00",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur",
    time2: "20:00 - 20:30",
    meal2: "Olahraga Perut",
    time3: "12:00 - 13:00",
    meal3: "Makan Siang",
    time4: "19:00 - 20:00",
    meal4: "Makan Malam"
  },
  "Minggu": {
    time1: "07:30 - 08:00",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur",
    time2: "20:00 - 20:30",
    meal2: "Olahraga Tangan & Punggung",
    time3: "12:00 - 13:00",
    meal3: "Makan Siang",
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