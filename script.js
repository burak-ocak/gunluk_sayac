let btnBasla = document.querySelector("#btnBaslat");
let btnDurdur = document.querySelector("#btnDurdur");
let btnBitir = document.querySelector("#btnBitir");

let saat = document.querySelector("#saat");
let dakika = document.querySelector("#dakika");
let saniye = document.querySelector("#saniye");

let Interval;

let sec = 00;
let min = 00;
let hour = 00;

btnBasla.addEventListener("click", function(){
    clearInterval(Interval);
    Interval = setInterval(zamanArttir, 1000);
});

btnDurdur.addEventListener("click", function(){
    clearInterval(Interval);
    btnBasla.textContent = "Devam et";
});

btnBitir.addEventListener("click", function(){
    clearInterval(Interval);

    sec = 00;
    min = 00;
    hour = 00;

    saat.textContent = "00";
    dakika.textContent = "00";
    saniye.textContent = "00";
})



function zamanArttir(){
    sec++;

    if(sec > 9){
        saniye.textContent = sec;
    }else{
        saniye.textContent = "0" + sec;
    };

    if(sec > 59){
        sec = 00;
        saniye.textContent = "0" + sec;
        min++;
    }

    
    if(min > 9){
        dakika.textContent = min;
    }else{
        dakika.textContent = "0" + min;
    };

    if(min > 59){
        min = 00;
        dakika.textContent = "0" + min;
        hour++;
    };

    
    if(hour > 9){
        saat.textContent = hour;
    }else{
        saat.textContent = "0" + hour;
    };
}
