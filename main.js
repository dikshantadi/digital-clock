const hourEL = document.getElementById('Hour');
const minEL = document.getElementById('Minute');
const secEl = document.getElementById('Second');
const AMEL = document.getElementById('AM');


function updateClock(){
    let H = new Date().getHours();
    let M = new Date().getMinutes();
    let S = new Date().getSeconds();
    let A = 'AM'
    if (H > 12) {
        H = H - 12;
        A = 'PM';
    }
    if(H < 10){
        H = "0" + H;
    }
    else{
        H;
    }
    if(M < 10){
        M = "0" + M;
    }
    else{
        M;
    }
    if(S < 10){
        S = "0" + S;
    }
    else{
        S;
    }

    hourEL.innerText = H;
    minEL.innerText = M;
    secEl.innerText = S;
    AMEL.innerText = A;
    setTimeout(() => {
      updateClock();  
    }, 1000); 
}

updateClock();