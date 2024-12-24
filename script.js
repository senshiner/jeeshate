// Menentukan jadwal olahraga berdasarkan hari
const scheduleOlahraga = {
    "Senin": "Olahraga Tangan",
    "Selasa": "Olahraga Kaki",
    "Rabu": "Istirahat",
    "Kamis": "Olahraga Tangan",
    "Jumat": "Olahraga Kaki",
    "Sabtu": "Olahraga Perut",
    "Minggu": "Istirahat"
};

// Menentukan hari saat ini
const today = new Date();
const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const todayName = days[today.getDay()];

// Menampilkan jenis olahraga yang sesuai dengan hari ini
function updateSchedule(day) {
    const olahragaPagi = scheduleOlahraga[day];
    const olahragaMalam = olahragaPagi === "Istirahat" ? "Istirahat" : olahragaPagi;

    // Update bagian olahraga pagi dan malam
    document.getElementById("olahraga-pagi").textContent = olahragaPagi;
    document.getElementById("olahraga-malam").textContent = olahragaMalam;
}

// Memanggil fungsi untuk menampilkan jadwal olahraga berdasarkan hari ini
updateSchedule(todayName);