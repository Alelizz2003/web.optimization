document.addEventListener('DOMContentLoaded',()=>{const cart=[];const cartList=document.getElementById('cart-list');const cartTotal=document.getElementById('cart-total');const modal=document.getElementById('cart-modal');const closeModal=document.querySelector('.close');document.querySelectorAll('.add-to-cart').forEach(button=>{button.addEventListener('click',(event)=>{const productCard=event.target.closest('.product-card');const productName=productCard.querySelector('.product-info p:nth-child(2)').textContent;const productPrice=parseFloat(productCard.querySelector('.product-info p:nth-child(1)').textContent.replace(',','.'));const product={name:productName,price:productPrice};cart.push(product);updateCart()})});closeModal.addEventListener('click',()=>{modal.style.display='none'});function updateCart(){cartList.innerHTML='';let total=0;cart.forEach((product,index)=>{const li=document.createElement('li');li.classList.add('cart-item');li.textContent=`${product.name} - ${product.price.toFixed(2).replace('.', ',')}`;const removeButton=document.createElement('button');removeButton.textContent='Remove';removeButton.addEventListener('click',()=>{cart.splice(index,1);updateCart()});li.appendChild(removeButton);cartList.appendChild(li);total+=product.price});cartTotal.textContent=`Total: ${total.toFixed(2).replace('.', ',')}`;modal.style.display='block'}})