//number conver funcion
function setValue(id){
   const home= document.getElementById(id).value;
   const maho=parseInt(home);
   return maho;
}
//inner text valu function
function inne(id){
   const man =document.getElementById(id).innerText;
   const mae=parseInt(man);
   return mae;
}

document.getElementById('addmoney-btn').addEventListener('click',function(e){
    e.preventDefault();
    //bank seleck
    const bank=document.getElementById('select-bank').innerText;
    //banck acount number
    const banckAccount=document.getElementById('bank-account').value;
    const banckLengh=banckAccount.length;
    if(banckLengh!=11){
      alert('wrong your account number pleas type 11 disit number');
    }
    //curent money
    const totalAmount=inne('total');
   const addMoney=setValue('addamount');
   
    //select pin 
    const pinNumber=document.getElementById('pin-number').value;
    const pinLenth=pinNumber.length;
    if(pinLenth !=4){
      alert('wrong your pin ples type 4 disit');
      return;
    }
    //sum
    const resutl =totalAmount + addMoney;
   document.getElementById('total').innerText=resutl;

});


//cashout money //
document.getElementById('baba').addEventListener('click', function(){
   const cashAccout=setValue('cashout-account');
   const cashAmount=setValue('cashout-amount');
   const totalAmount2 =inne('total')
   const cashPin=document.getElementById('cashout-pin').value;
   const pinLen=cashPin.length;
   if(pinLen!=4){
      alert('wrong your pin');
      return;
   }
  const valid=totalAmount2 - cashAmount;
  document.getElementById('total').innerText=valid;
  
  
})

//transform money
document.getElementById('transfer-send').addEventListener('click',function(){
   const cashCurrent =inne('total')
   const transAccount=setValue('trans-account');
   const transAmout=setValue('trans-amount');
   // const transPin=setValue('trans-pin');
    const transPin=document.getElementById('trans-pin').value;
   const tranLen=transPin.length;
   if(tranLen!=4){
      alert('wrong your pin');
      return;
   }
    const valid=cashCurrent - transAmout;
  document.getElementById('total').innerText=valid;

})
//bunas cupon

document.getElementById('bonus-btn').addEventListener('click',function(){
    const bonusCurrent =inne('total')
   const valid=bonusCurrent + 5000;
  document.getElementById('total').innerText=valid;
  alert('you win $5000')

})
//payBill sen
document.getElementById('pay-send').addEventListener('click',function(){
   const payCurre =inne('total')
   const payAcoout=setValue('pay-account');
   const payAmount=setValue('pay-amount');
   // const transPin=setValue('trans-pin');
    const payPin=document.getElementById('pay-pine').value;
   const payLen=payPin.length;
   if(payLen!=4){
      alert('wrong your pin');
      return;
   }
    const valid=payCurre - payAmount;
  document.getElementById('total').innerText=valid;
})