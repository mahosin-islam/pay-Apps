
//number conver funcion
const transactionData=[];
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
//add
document.getElementById('addmoney-btn').addEventListener('click',function(e){
    e.preventDefault();
 
    const bank=document.getElementById('select-bank').innerText;
    //banck acount number
    const banckAccount=document.getElementById('bank-account').value;
    const banckLengh=banckAccount.length;
    if(banckLengh!=11){
      alert('wrong your account number pleas type 11 disit number');
    }
 
    const totalAmount=inne('total');
   const addMoney=setValue('addamount');
   
   
    const pinNumber=document.getElementById('pin-number').value;
    const pinLenth=pinNumber.length;
    if(pinLenth !=4){
      alert('wrong your pin ples type 4 disit');
      return;
    }
   
    const resutl =totalAmount + addMoney;
   document.getElementById('total').innerText=resutl;

  
   const add={
      nam:'addmony',
      date:new Date().toLocaleDateString()
   };
   transactionData.push(add);
   console.log(transactionData)

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
  
  const  add={
      nam:'cashout',
      date:new Date().toLocaleDateString()
   };
   transactionData.push(add);
   console.log(transactionData)
  
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
  
 const   add={
      nam:'transaton',
      date:new Date().toLocaleDateString()
   };
   transactionData.push(add);
})
//bunas cupon

document.getElementById('bonus-btn').addEventListener('click',function(){
    const bonusCurrent =inne('total')
   const valid=bonusCurrent + 5000;
  document.getElementById('total').innerText=valid;
  alert('you win $5000')
  
const    add={
      nam:'bonus',
      date:new Date().toLocaleDateString()
   };
   transactionData.push(add);

})
//payBill sen
document.getElementById('pay-send').addEventListener('click',function(){
   const payCurre =inne('total')
   const payAcoout=setValue('pay-account');
   const payAmount=setValue('pay-amount');
    const payPin=document.getElementById('pay-pine').value;
   const payLen=payPin.length;
   if(payLen!=4){
      alert('wrong your pin');
      return;
   }
    const valid=payCurre - payAmount;
  document.getElementById('total').innerText=valid;
  
  const  add={
      nam:'pay bill',
      date:new Date().toLocaleDateString()
   };
   transactionData.push(add);
  

  
})
//trnsiton history
document.getElementById('tansaction-btn').addEventListener('click',function(){
   
  const trnsjact= document.getElementById('transition-button')
  const div =document.createElement('div');

  
      for(const add of transactionData){
         
         div.innerHTML=`<div class="child  h-auto bg-white rounded-[12px]  w-full mb-4 p-4 flex justify-between">
      <div class="flex w-50 justify-between ">
        <div class=" rounded-[18px] bg-[#f4f5f7]">
        <img  src="../assets/wallet1.png" class="w-12 p-3 h-12" alt="">
      </div>
      <div>
        <h2>${add.nam}</h2>
         <span>${add.date}</span>
      </div>
      </div>
      <i class="fa-solid fa-ellipsis-vertical   mt-4"></i>
    </div> 
     `
 
      }
           trnsjact.appendChild(div)

})
