//first stape catch all id
const mobileNumbr=document.getElementById('Mobile-number');

const digitPin=document.getElementById('disit-pin');

const loginBtn=document.getElementById('Login-btn')

loginBtn.addEventListener('click',function(){

 let mobile= mobileNumbr.value;
let digit=digitPin.value;
     if(mobile.length == 11) {
        if(digit.length==4){
                    window.location.href='/stor-html/Payo.html'
        }
        else{
            alert('wrong you digit');
        }
     } 
     else {
        alert('wrong your mumber');
     }
    
})


