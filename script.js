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
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur. Cemilan: 1-2 keping Biskuit Regal.",
    time2: "06:30 - 07:00",
    meal2: "Olahraga Tangan & Punggung",
    time3: "12:00 - 12:10",
    meal3: "Camilan: 1-2 potong Roti Tawar, 1-2 keping Biskuit Regal.",
    time4: "12:10 - 13:00",
    meal4: "Makan Siang: Nasi putih (1 centong sedang)",
    time5: "19:00 - 19:10",
    meal5: "Makan Malam: Nasi putih (1 centong kecil)"
  },
  "Selasa": {
    time1: "06:00 - 06:30",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur. Cemilan: 1-2 keping Biskuit Regal.",
    time2: "06:30 - 07:00",
    meal2: "Olahraga Kaki & Paha",
    time3: "12:00 - 12:10",
    meal3: "Camilan: 1-2 potong Roti Tawar, 1-2 keping Biskuit Regal.",
    time4: "12:10 - 13:00",
    meal4: "Makan Siang: Nasi putih (1 centong sedang)",
    time5: "19:00 - 19:10",
    meal5: "Makan Malam: Nasi putih (1 centong kecil)"
  },
  "Rabu": {
    time1: "06:00 - 06:30",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur. Cemilan: 1-2 keping Biskuit Regal.",
    time2: "06:30 - 07:00",
    meal2: "Olahraga Tangan & Punggung",
    time3: "12:00 - 12:10",
    meal3: "Camilan: 1-2 potong Roti Tawar, 1-2 keping Biskuit Regal.",
    time4: "12:10 - 13:00",
    meal4: "Makan Siang: Nasi putih (1 centong sedang)",
    time5: "19:00 - 19:10",
    meal5: "Makan Malam: Nasi putih (1 centong kecil)"
  },
  "Kamis": {
    time1: "06:00 - 06:30",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur. Cemilan: 1-2 keping Biskuit Regal.",
    time2: "06:30 - 07:00",
    meal2: "Olahraga Tangan & Punggung",
    time3: "12:00 - 12:10",
    meal3: "Camilan: 1-2 potong Roti Tawar, 1-2 keping Biskuit Regal.",
    time4: "12:10 - 13:00",
    meal4: "Makan Siang: Nasi putih (1 centong sedang)",
    time5: "19:00 - 19:10",
    meal5: "Makan Malam: Nasi putih (1 centong kecil)"
  },
  "Jumat": {
    time1: "06:00 - 06:30",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur. Cemilan: 1-2 keping Biskuit Regal.",
    time2: "06:30 - 07:00",
    meal2: "Olahraga Kaki & Paha",
    time3: "12:00 - 12:10",
    meal3: "Camilan: 1-2 potong Roti Tawar, 1-2 keping Biskuit Regal.",
    time4: "12:10 - 13:00",
    meal4: "Makan Siang: Nasi putih (1 centong sedang)",
    time5: "19:00 - 19:10",
    meal5: "Makan Malam: Nasi putih (1 centong kecil)"
  },
  "Sabtu": {
    time1: "06:00 - 06:30",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur. Cemilan: 1-2 keping Biskuit Regal.",
    time2: "06:30 - 07:00",
    meal2: "Olahraga Perut",
    time3: "12:00 - 12:10",
    meal3: "Camilan: 1-2 potong Roti Tawar, 1-2 keping Biskuit Regal.",
    time4: "12:10 - 13:00",
    meal4: "Makan Siang: Nasi putih (1 centong sedang)",
    time5: "19:00 - 19:10",
    meal5: "Makan Malam: Nasi putih (1 centong kecil)"
  },
  "Minggu": {
    time1: "06:00 - 06:30",
    meal1: "Makan Pagi: Nasi seporsi dengan 2 butir telur. Cemilan: 1-2 keping Biskuit Regal.",
    time2: "06:30 - 07:00",
    meal2: "Olahraga Perut",
    time3: "12:00 - 12:10",
    meal3: "Camilan: 1-2 potong Roti Tawar, 1-2 keping Biskuit Regal.",
    time4: "12:10 - 13:00",
    meal4: "Makan Siang: Nasi putih (1 centong sedang)",
    time5: "19:00 - 19:10",
    meal5: "Makan Malam: Nasi putih (1 centong kecil)"
  }
};

// Menampilkan jadwal untuk hari ini
const todaysSchedule = schedule[currentDay];

document.getElementById("time1").innerText = todaysSchedule.time1;
document.getElementById("meal1").innerText = todaysSchedule.meal1;

document.getElementById("time2").innerText = todaysSchedule.time2;
document.getElementById("meal2").innerText = todaysSchedule.meal2;

document.getElementById("time3").innerText = todaysSchedule.time3;
document.getElementById("meal3").innerText = todaysSchedule.meal3;

document.getElementById("time4").innerText = todaysSchedule.time4;
document.getElementById("meal4").innerText = todaysSchedule.meal4;

document.getElementById("time5").innerText = todaysSchedule.time5;
document.getElementById("meal5").innerText = todaysSchedule.meal5;