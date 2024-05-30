let circularprogress=document.querySelector("#circular-progress1");
let progressvalue=document.querySelector("#progress-value1");
let progressstartval=0, progressendvalue=860, speed=10;
let progress=setInterval(() =>{
    progressstartval++;
progressvalue.textContent=`${progressstartval}K`
circularprogress.style.background=`conic-gradient(#2C4B98 ${progressstartval*0.36}deg, white 0deg)`
    if(progressstartval==progressendvalue){
        clearInterval(progress);
    }
},speed);
let circularprogress2=document.querySelector("#circular-progress2");
let progressvalue2=document.querySelector("#progress-value2");
let progressstartval2=0, progressendvalue2=780, speed2=10;
let progress2=setInterval(() =>{
    progressstartval2++;
progressvalue2.textContent=`${progressstartval2}K`
circularprogress2.style.background=`conic-gradient(#2C4B98 ${progressstartval2*0.36}deg, white 0deg)`
    if(progressstartval2==progressendvalue2){
        clearInterval(progress2);
    }
},speed2);
let circularprogress3=document.querySelector("#circular-progress3");
let progressvalue3=document.querySelector("#progress-value3");
let progressstartval3=0, progressendvalue3=608, speed3=10;
let progress3=setInterval(() =>{
    progressstartval3++;
progressvalue3.textContent=`${progressstartval3}`
circularprogress3.style.background=`conic-gradient(#2C4B98 ${progressstartval3*0.36}deg, white 0deg)`
    if(progressstartval3==progressendvalue3){
        clearInterval(progress3);
    }
},speed3);
