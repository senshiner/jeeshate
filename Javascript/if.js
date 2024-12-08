console.info("If Learning, Run in HTML Inspect ")
/*------------buatkan program diskon dari 2 digit nim---------------*/
let nim = prompt('masukan nim anda: ')
let digit = nim.slice(-2) // mengambil 2 index string diakhir, karna default index adalah 0
console.log(typeof digit)
let twoDigit = parseInt(digit) // ubah digit jadi integer
let diskon;

// isNaN = Bukan Numbers
if (isNaN(twoDigit) || twoDigit < 0 && twoDigit > 99){
    console.log('error harap masukan nim')
} else {
    console.log(`2 digit akhir dari nim anda adalah ${twoDigit}`)
    
    if(twoDigit >= 80){
        diskon = 50
    } else if(twoDigit >= 60){
        diskon = 40
    } else if(twoDigit >= 50){
        diskon = 30
    } else if(twoDigit >= 40){
        diskon = 20
    } else if(twoDigit >= 20){
        diskon = 10
    } else {
        diskon = 0
    }

    if(diskon > 0){
        console.log(`Diskon anda adalah ${diskon}%`)
    } else {
        console.log('Anda tidak mendapatkan diskon')
    }
}
