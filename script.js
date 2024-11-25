// let saldoAwal = Number(prompt('masukan saldo awal'))
// let saldoTambahan = Number(prompt('masukan saldo tambahan'))
// const saldoAkhir= saldoAwal + saldoTambahan
// console.log(`saldo akhir anda adalah ${saldoAkhir}`)
// let hari = ["ahad", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]
//     console.log(hari[new Date().getDay()]) //Cara pertama
// const today = new Date().getDay()
// const namaHari = hari[today]
// console.log(namaHari) //Cara kedua
/*-------------------------Ini adalah latihan diyoutube------------------------*/

/*------------buatkan program diskon dari 2 digit nim---------------*/
// let nim = prompt('masukan nim anda: ')
// let digit = nim.slice(-2)
// let twoDigit = parseInt(digit)
// let diskon

// if (isNaN(twoDigit) || twoDigit < 0 || twoDigit > 99){
//     console.log('error harap masukan nim')
// } else {
//     console.log(`2 digit akhir dari nim anda adalah ${twoDigit}`)
    
//     if(twoDigit >= 80){
//         diskon = 50
//     } else if(twoDigit >= 60){
//         diskon = 40
//     } else if(twoDigit >= 50){
//         diskon = 30
//     } else if(twoDigit >= 40){
//         diskon = 20
//     } else if(twoDigit >= 20){
//         diskon = 10
//     } else {
//         diskon = 0
//     }

//     if(diskon > 0){
//         console.log(`Diskon anda adalah ${diskon}%`)
//     } else {
//         console.log('Anda tidak mendapatkan diskon')
//     }
// }

/*Create Program baru --------------------- */
// const appConfig = (function () {
//     const apiKey = "1234";
//     const apiUrl = "https://example.com";
//     return {
//         getApiKey: function(){
//             return apiKey;
//         },
//         getApiUrl: function(){
//             return apiUrl;
//         }
//     };
// })();
// console.log(appConfig.getApiKey())
// console.log(appConfig.getApiUrl())

// function faktorial(n){
//     if (n === 0){
//         return 1
//     }
//     return n * faktorial(n-1)
// }
// console.log(faktorial(10))

// const judul = document.querySelector('h1')
// const warna = document.getElementsByClassName('jadwal')
// const teks = document.getElementsByClassName('insta')
// console.log(warna)
// let ubah = document.querySelector('div.left')
// console.log(ubah)
// warna[0].style.backgroundColor = 'grey'
// teks[0].style.border = '1px solid'
// judul.innerHTML = 'IG KELAS'