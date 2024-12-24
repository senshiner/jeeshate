// Fungsi untuk menampilkan jadwal olahraga berdasarkan waktu yang diklik
function showExercise(timeOfDay) {
    const exerciseScheduleDiv = document.getElementById('exercise-schedule');
    let scheduleContent = '';

    // Menentukan jadwal olahraga berdasarkan waktu (Pagi/Malam)
    if (timeOfDay === 'morning') {
        scheduleContent = `
            <div class="jadwal-container">
                <h3>Jadwal Olahraga Pagi (06:30 - 07:00)</h3>
                <p>Fokus: Tangan & Punggung</p>
                <ul>
                    <li>Pemanasan (5 menit): Lompat tali atau stretching.</li>
                    <li>Pull-up: 3 set (5-7 repetisi) – Fokus pada punggung dan lengan.</li>
                    <li>Push-up: 3 set (10 repetisi) – Fokus pada dada dan triceps.</li>
                    <li>Bicep Curl (Tas): 3 set (12 repetisi per tangan).</li>
                    <li>Tricep Dips: 3 set (12 repetisi).</li>
                    <li>Handgrip: 3 set (15 repetisi per tangan) – Fokus pada kekuatan genggaman.</li>
                    <li>Superman Hold: 3 set (30 detik) – Fokus pada punggung bawah.</li>
                </ul>
            </div>
        `;
    } else if (timeOfDay === 'night') {
        scheduleContent = `
            <div class="jadwal-container">
                <h3>Jadwal Olahraga Malam (20:00 - 20:30)</h3>
                <p>Fokus: Tangan & Punggung</p>
                <ul>
                    <li>Pemanasan (5 menit): Lompat tali atau stretching.</li>
                    <li>Pull-up: 3 set (5-7 repetisi) – Fokus pada punggung dan lengan.</li>
                    <li>Push-up: 3 set (10 repetisi) – Fokus pada dada dan triceps.</li>
                    <li>Bicep Curl (Tas): 3 set (12 repetisi per tangan).</li>
                    <li>Tricep Dips: 3 set (12 repetisi).</li>
                    <li>Handgrip: 3 set (15 repetisi per tangan) – Fokus pada kekuatan genggaman.</li>
                    <li>Superman Hold: 3 set (30 detik) – Fokus pada punggung bawah.</li>
                </ul>
            </div>
        `;
    }

    // Tampilkan jadwal olahraga yang sesuai
    exerciseScheduleDiv.innerHTML = scheduleContent;
    exerciseScheduleDiv.style.display = 'block';
}