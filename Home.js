//first stape catch all id
const mobileNumbr=document.getElementById('Mobile-number');

const digitPin=document.getElementById('disit-pin');

const loginBtn=document.getElementById('Login-btn')

const man=23123456789;

const pin=9753;
loginBtn.addEventListener('click',function(){
 let mobile= mobileNumbr.value;
let digit=digitPin.value;
     if(mobile == man) {
        if(digit==pin){
                    window.location.href='./stor-html/Payo.html'
        }
        else{
            alert('wrong you digit');
        }
     } 
     else {
        alert('wrong your mumber');
     }
    
})


