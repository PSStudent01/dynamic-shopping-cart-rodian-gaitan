const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
let totalPrice = 0;


/////// APPENDING ITEMS AND INCREMENTALLY UPDATING THE TOTAL /////// 
// Rendering each appended product item and corresponding price:
addProductButton.addEventListener("click", function(){
    //console.log('button has been clicked')
    let newItem = document.createElement('li')
    newItem.innerHTML = productNameInput.value + ' = ' + '$' + productPriceInput.value + ' ' + '<button class="remove">Remove</button>' // if time allows come back to refactor 
    cart.appendChild(newItem)
    //console.log(addTotalPrice())
    addTotalPrice()
    totalPriceSpan.textContent = totalPrice.toFixed(2)
})
// Function to handle the total sum of current items:
function addTotalPrice(){
       //return totalPrice += productPriceInput.value
        //totalPriceSpan.textContent = totalPrice.toFixed(2)
        return totalPrice += Number(productPriceInput.value)
       // totalPriceSpan.textContent = totalPrice.toFixed(2)
}
 
/////// REMOVING ITEMS AND DECREMENTALLY UPDATING THE TOTAL/////// 
// Re-rendering the list after each removed product item and corresponding price:
cart.addEventListener('click', (event) =>{
if (event.target.classList.contains('remove'))
event.target.parentElement.remove()
console.log(subtractTotalPrice())
totalPriceSpan.textContent = totalPrice.toFixed(2)
})

// Function to handle the total after a product item is removed:
function subtractTotalPrice(){
       //return totalPrice += productPriceInput.value
        //totalPriceSpan.textContent = totalPrice.toFixed(2)
        return totalPrice -= Number(productPriceInput.value)
       // totalPriceSpan.textContent = totalPrice.toFixed(2)
}



/* 
I think BOTH of these are  for the OPTIONAL question. If time allows come back to enhance app !!!!
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}
*/


