let p1="I must truly thankful to this website naming patienttracket and their well experienced Doctors and Staff memebers for the promptness of their service.Any delay Would have come Scary outcomes. I can vouch for the fact that the panel of patienttracker website have the great abilities which is unmatched. Special thanks to Dr. Pradeep singh Senior sergeon of his organisation that did a commendable work and the Director of this Organisation to provide such amazing infrastructure."

let p2="Very nice facilities and infrastructure. Dedicated and skilled team of nurse and administrators. Dr. Anand Patel and Ms. Prerna are very positive,supportive and superbly skilled in their areas of expertise. Overall,we had an excellent experience with Motherhood care. Wishing all the best to entire team for all their future endeavours. Thank you!!!"
function testimonial(){
    document.querySelector('#desc5').innerText="";
    document.querySelector('#desc6').innerText=p1;
    document.querySelector('#desc5').style.fontSize='17px'
    document.querySelector('.photo8').src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944'
    document.querySelector('#samuel2').innerText='Arriana';
   document.querySelector('#clk1').innerText='Double click>>'
}
let button=document.querySelector('#clk1');
button.addEventListener("dblclick", Event=>{
 document.querySelector('#desc6').innerText=p2;
 document.querySelector('.photo8').src='https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
 document.querySelector('#samuel2').innerText='Bamidele';
})
var lrn=document.querySelector('#sec4');
lrn.style.display='none';
var display=0;
function learn(){
    if(display==0){
        lrn.style.display='block';
        display=1;
        document.querySelector('#button1').innerText='show less'
    }
    else{
        lrn.style.display='none';
        display=0;
           document.querySelector('#button1').innerText='Learn More'
    }
  
}