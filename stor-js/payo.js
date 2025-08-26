//togling - main paren
const select =document.getElementsByClassName('common');
const color =document.getElementsByClassName('about');
//addMoney
const addMoney=document.getElementById('addmoney').addEventListener('click',function(){
  for(const selec of select){
  selec.style.display='none';
}
for(const col of color){
  col.style.backgroundColor='white';
}
document.getElementById('addmoney-child').style.display='block';

document.getElementById('addmoney').style.backgroundColor='pink';
 
  

});
//chashout
const cashOut=document.getElementById('Cashout').addEventListener('click',function(){
   for(const selec of select){
  selec.style.display='none';
}
for(const col of color){
  col.style.backgroundColor='white';
}
document.getElementById('Cashout-child').style.display='block';
document.getElementById('Cashout').style.backgroundColor='pink';

});
        // transfer
const transfer=document.getElementById('Transfer').addEventListener('click',function(){
   for(const selec of select){
  selec.style.display='none';
}
for(const col of color){
  col.style.backgroundColor='white';
}
document.getElementById('Transfer-child').style.display='block';
document.getElementById('Transfer').style.backgroundColor='pink';
});
  // bonus
const Bonus=document.getElementById('bunas').addEventListener('click',function(){
   for(const selec of select){
  selec.style.display='none';
}
for(const col of color){
  col.style.backgroundColor='white';
}
document.getElementById('Bonus-child').style.display='block';
document.getElementById('bunas').style.backgroundColor='pink';
});
  // pay-bil
const payBill=document.getElementById('paybil').addEventListener('click',function(){
   for(const selec of select){
  selec.style.display='none';
}
for(const col of color){
  col.style.backgroundColor='white';
}
document.getElementById('pay-child').style.display='block';
document.getElementById('paybil').style.backgroundColor='pink';
});
  // send-transation-history
const sendMoney=document.getElementById('tansaction-btn').addEventListener('click',function(){
   for(const selec of select){
  selec.style.display='none';
}
for(const col of color){
  col.style.backgroundColor='white';
}
document.getElementById('tansaction-history').style.display='block';
document.getElementById('tansaction-btn').style.backgroundColor='pink';
   console.log(transactionData)
});
