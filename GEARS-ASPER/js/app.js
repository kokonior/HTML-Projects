let parentCards= document.querySelectorAll('.Card');

parentCards.forEach((parentCard)=>{
  let remover=parentCard.querySelector('.remover');
  remover.addEventListener('click',()=>{
      parentCard.remove();
      parentCard.classList.remove('Card');
      parentCard.classList.add('deleted-Card');
      countNewNodeList();
      countNewPrices(parentCard);

  });
});
function countNewNodeList(){
  let parentCards=document.querySelectorAll('.Card');

  if(parentCards.length===0){
    let checkoutBtn=document.querySelector('#checkout-btn');
    let taxes=document.querySelector('.tax > h5:nth-child(2) > span:nth-child(1)');
    let totalInvoice=document.querySelector('.Total > h5:nth-child(2)>span');
    let discount=document.querySelector('.bag-discount > h5:nth-child(2) > span:nth-child(1)');
    taxes.innerText=0;
    totalInvoice.innerText=0;
    discount.innerText=0;
    checkoutBtn.classList.add('disabled');
  }

}

function countNewPrices(parentCard){

  let totalBag = document.querySelector('.bag-total > h5:nth-child(2) > span');

  
  let totalInvoice=document.querySelector('.Total > h5:nth-child(2)>span');


  totalBag.innerText = parseInt(totalBag.innerText) - parseInt(parentCard.querySelector('.item-price>span').innerText);
  totalInvoice.innerText = parseInt(totalInvoice.innerText) - parseInt(parentCard.querySelector('.item-price>span').innerText);
  
  
 
}