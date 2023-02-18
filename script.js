let sayacBasladiMi = false;

let timeText = document.querySelector("#timeText");
let hour = timeText.querySelector("#hour");
let minute = timeText.querySelector("#minute");
let second = timeText.querySelector("#second");
let start = document.querySelector("#start");

let stop = document.querySelector("#stop");
let finish = document.querySelector("#finish");


let sec = 0;
let min = 0;
let hours = 0;
    

start.addEventListener("click", function(){
    setInterval(test, 1000);
});



function test(){
    sec++;

    if(sec < 60){
        second.textContent = sec + " saniye";
    }

    if(sec > 60){
        sec = 0;
        second.textContent = sec + " saniye";
        min++;
        minute.textContent = min + " dakika";
    }
    
    if(min > 60){
        min = 0;
        minute.textContent = min + " dakika";
        hours++;
        hour.textContent = hours + " saat";
    }
};



