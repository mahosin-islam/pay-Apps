const select =document.getElementsByClassName('common');


//addMoney
const addMoney=document.getElementById('addmoney').addEventListener('click',function(){
  for(const selec of select){
  selec.style.display='none';
}
document.getElementById('addmoney-child').style.display='block';
});
//chashout
const cashOut=document.getElementById('Cashout').addEventListener('click',function(){
   for(const selec of select){
  selec.style.display='none';
}
document.getElementById('Cashout-child').style.display='block';

});
        // transfer
const transfer=document.getElementById('Transfer').addEventListener('click',function(){
   for(const selec of select){
  selec.style.display='none';
}
document.getElementById('Transfer-child').style.display='block';
});
  // bonus
const Bonus=document.getElementById('bunas').addEventListener('click',function(){
   for(const selec of select){
  selec.style.display='none';
}
document.getElementById('Bonus-child').style.display='block';
});
  // pay-bil
const payBill=document.getElementById('paybil').addEventListener('click',function(){
   for(const selec of select){
  selec.style.display='none';
}
document.getElementById('pay-child').style.display='block';
});
  // send-money
const sendMoney=document.getElementById('sendmoney').addEventListener('click',function(){
   for(const selec of select){
  selec.style.display='none';
}
document.getElementById('tansaction').style.display='block';
});
