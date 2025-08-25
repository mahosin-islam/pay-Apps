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
    //curent amount select
   //  const  totalAmount=parseInt(document.getElementById('total').innerText);
   const totalAmount=inne('total');
    //bank seleck
    const bank=document.getElementById('select-bank').innerText;
    //amount acount number
    const banckAccount=document.getElementById('bank-account').value;
    const bankLenght=banckAccount.length;
    //select amount
   const addMoney=setValue('addamount')
   
    //select pin 
    const pinNumber=document.getElementById('pin-number').value;
    const pinLenth=pinNumber.length;

//condition 
if( bankLenght!=11){
   alert('invalid number');
   return;
}
if(pinLenth!=4){
    alert('invalid pin');
   return;
}
    //sum
    const resutl =totalAmount + addMoney;
   document.getElementById('total').innerText=resutl;

});
document.getElementById('baba').addEventListener('click', function(){
   const withDrow=setValue('with-drow');
   const totalAmount2 =inne('total')
   const pinWid=document.getElementById('pine').value;
   const pinLen=pinWid.length;
   if(pinLen!=4){
      alert('wrong your pin');
      return;
   }
  const valid=totalAmount2 - withDrow;
  document.getElementById('total').innerText=valid;
  
  
})
//with-drow