let timeText = document.querySelector("#timeText");
let saat = timeText.querySelector("#saat");
let dakika = timeText.querySelector("#dakika");
let saniye = timeText.querySelector("#saniye");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let finish = document.querySelector("#finish");

let bir = 0;
let iki = 0;
let uc = 0;
    
function test(){
    bir++;

    if(bir < 60){
        saniye.textContent = bir + "sn";
    }

}

setInterval(test, 1000);