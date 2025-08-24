document.getElementById('addmoney-btn').addEventListener('click',function(e){
    e.preventDefault();
    const check=document.getElementById('btn-type').value;
    const  totalAmount=parseInt(document.getElementById('total').innerText);
    const bank=document.getElementById('select-bank').innerText;
    const addMoney=parseInt(document.getElementById('addamount').value);
    const pinNumber=parseInt(document.getElementById('pin-number').value);
    const pin=document.getElementById('pin-number').value;

    console.log(check);
    const resutl =totalAmount + addMoney;
   document.getElementById('total').innerText=resutl;

});
document.getElementById('baba').addEventListener('click', function(){
   const totalAmount2=parseInt(document.getElementById('total').innerText); 
  const withDrow=parseInt(document.getElementById('with-drow').value);

  const valid=totalAmount2 - withDrow;
  document.getElementById('total').innerText=valid;
  
  
})
//with-drow