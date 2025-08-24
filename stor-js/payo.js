//addmoney==========///
const add=document.getElementById('addmoney').addEventListener('click',function(){
document.getElementById('Payment').style.display='none';
document.getElementById('addmoney').style.backgroundColor='pink';
document.getElementById('bunas').style.backgroundColor='white';
  document.getElementById('get-btn').style.backgroundColor='white';
document.getElementById('Cashout-child').style.display='none';
document.getElementById('addmoney-child').style.display='block'
});
//cashout =========///
 document.getElementById('get-btn').addEventListener('click', function(){
  document.getElementById('get-btn').style.
  backgroundColor='pink';
  document.getElementById('bunas').style.backgroundColor='white';
  document.getElementById('addmoney').style.backgroundColor='white';
  document.getElementById('Cashout-child').style.display='block';
  document.getElementById('addmoney-child').style.display='none'
  document.getElementById('Payment').style.display='none';
})
//bunas =============//
document.getElementById('bunas').addEventListener('click', function(){
  document.getElementById('bunas').style.backgroundColor='pink';
   document.getElementById('get-btn').style.backgroundColor='white';
  document.getElementById('addmoney').style.backgroundColor='white';
  
  document.getElementById('last').style.display='block';
  document.getElementById('Cashout-child').style.display='none';
  document.getElementById('addmoney-child').style.display='none'
  document.getElementById('Payment').style.display='none';
})