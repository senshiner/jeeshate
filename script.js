// Menentukan jadwal berdasarkan hari
const schedule = {
    olahraga: {
        "Senin": "Olahraga Tangan",
        "Selasa": "Olahraga Kaki",
        "Rabu": "Istirahat",
        "Kamis": "Olahraga Tangan",
        "Jumat": "Olahraga Kaki",
        "Sabtu": "Olahraga Perut",
        "Minggu": "Istirahat"
    },
    jadwalMakan: {
        makanPagi: "Makan Pagi: Nasi seporsi dengan 2 butir telur. Cemilan: 1-2 keping Biskuit Regal.",
        makanSiang: "Makan Siang: Nasi putih (1 centong sedang)",
        makanMalam: "Makan Malam: Nasi putih (1 centong kecil)",
        camilan: "Camilan: 1-2 potong Roti Tawar, 1-2 keping Biskuit Regal."
    },
    waktu: {
        pagi: "06:00 - 06:30",
        olahragaPagi: "06:30 - 07:00",
        camilanSiang: "12:00 - 12:10",
        makanSiang: "12:10 - 13:00",
        makanMalam: "19:00 - 19:10",
        olahragaMalam: "20:00 - 20:30"
    }
};

// Menentukan hari saat ini
const today = new Date();
const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const todayName = days[today.getDay()];

// Menampilkan jadwal berdasarkan hari ini
function updateSchedule(day) {
    const daySchedule = schedule.olahraga[day];
    const makan = schedule.jadwalMakan;
    const waktu = schedule.waktu;

    let scheduleHTML = `
        <h4>Jadwal Hari: ${day}</h4>
        <ul class="list-group">
            <li class="list-group-item"><strong>${waktu.pagi}:</strong> ${makan.makanPagi}</li>
            <li class="list-group-item"><strong>${waktu.olahragaPagi}:</strong> Olahraga: ${daySchedule}</li>
            <li class="list-group-item"><strong>${waktu.camilanSiang}:</strong> ${makan.camilan}</li>
            <li class="list-group-item"><strong>${waktu.makanSiang}:</strong> ${makan.makanSiang}</li>
            <li class="list-group-item"><strong>${waktu.makanMalam}:</strong> ${makan.makanMalam}</li>
            <li class="list-group-item"><strong>${waktu.olahragaMalam}:</strong> Olahraga: ${daySchedule}</li>
        </ul>
    `;

    document.getElementById('jadwal').innerHTML = scheduleHTML;
}

// Memanggil fungsi untuk menampilkan jadwal hari ini
updateSchedule(todayName);