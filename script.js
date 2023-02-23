let btnBaslat = document.querySelector("#btnBaslat");
let btnDurdur = document.querySelector("#btnDurdur");
let btnBitir = document.querySelector("#btnBitir");

let saniye = document.querySelector("#saniye");
let dakika = document.querySelector("#dakika");
let saat = document.querySelector("#saat");

let second = 00;
let minute = 00;
let hour = 00;

let Interval;

btnBaslat.addEventListener("click", function(){
    clearInterval(Interval);
    Interval = setInterval(sayac, 1000);
    btnBaslat.textContent = "Başlat";
    btnBaslat.style.backgroundColor = "red";
    btnBaslat.style.color = "white";
    btnDurdur.style.backgroundColor = "";
    btnDurdur.style.color = "";
});

btnDurdur.addEventListener("click", function(){
    clearInterval(Interval);
    btnBaslat.textContent = "Devam et";
    btnDurdur.style.backgroundColor = "red";
    btnDurdur.style.color = "white";
    btnBaslat.style.backgroundColor = "";
    btnBaslat.style.color = "";
});

btnBitir.addEventListener("click", function(){
    btnBaslat.style.backgroundColor = "";
    btnBaslat.style.color = "";
    btnDurdur.style.backgroundColor = "";
    btnDurdur.style.color = "";
    
    let deneme = saat.textContent + ": " + dakika.textContent + ": " +  saniye.textContent;
    console.log(deneme);
    clearInterval(Interval);

    saniye.textContent = "00";
    dakika.textContent = "00";
    saat.textContent = "00";

    second = 00;
    minute = 00;
    hour = 00;
});

function sayac(){
    second++;

    if(second > 9){
        saniye.textContent = second;
    }else{
        saniye.textContent = "0" + second;
    };

    if(second > 59){
        second = 00;
        saniye.textContent = "0" + second;
        minute++;
    };

    if(minute > 9){
        dakika.textContent = minute;
    }else{
        dakika.textContent = "0" + minute;
    };

    if(minute > 59){
        minute = 00;
        dakika.textContent = "0" + minute;
        hour++;
    };

    if(hour > 9){
        saat.textContent = hour;
    }else{
        saat.textContent = "0" + hour;
    };
}