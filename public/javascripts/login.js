
function counter(){
    let val=document.querySelector('#user1').value;
    let str= val;
    let value1=str.length
    console.log(typeof str);
    console.log(value1);
     if(value1<Number(4)){
      document.querySelector('#name').innerText='Name too Short'
      document.querySelector('#name').style.color='Red'
      document.querySelector('#name').style.fontfamily='cursive'
    }
    else{
      document.querySelector('#name').innerText=' Name successfull'
      document.querySelector('#name').style.color='green'
    }
    let val2=document.querySelector('#user2').value;
    let valnew=Number(val2.includes("@gmail.com"));
    if(valnew==0){
      document.querySelector('#mail').innerText='Forget to enter @gmail.com'
      document.querySelector('#mail').style.color='Red'
    }
    else{
      document.querySelector('#mail').innerText='Email successfull'
      document.querySelector('#mail').style.color='green'
    }
    let val3=document.querySelector('#user3').value;
     let newval2=Number(val3.includes('$'))
     let newval3=Number(val3.includes('@'))
     let newval4=Number(val3.includes('/'))
     let newval5=Number(val3.includes('.'))
      if(newval2||newval3||newval4||newval5){
      document.querySelector('#passlock').innerText='Password Successfull'
      document.querySelector('#passlock').style.color='green'
     }
     else{
      document.querySelector('#passlock').innerText='Use at least one symbols i.e @ , $ , / etc'
      document.querySelector('#passlock').style.color='Red'
     }
    }