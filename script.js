const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
let totalPrice = 0;


/////// APPENDING ITEMS AND INCREMENTALLY UPDATING THE TOTAL /////// 
// Rendering each appended product item and corresponding price:
addProductButton.addEventListener("click", function(event){

    
    if (!productNameInput.checkValidity() || !productPriceInput.checkValidity()) {
    event.preventDefault();
    return;}
    

    //console.log('button has been clicked')
    let newItem = document.createElement('li')

    let productPrice = Number(productPriceInput.value); // Convert price to number

    newItem.innerHTML = productNameInput.value + ' = ' + '$' + productPriceInput.value + ' ' + '<button class="remove">Remove</button>' // if time allows come back to refactor 
    
     // Store price in data-price attribute
    newItem.dataset.price = productPrice;
    
    cart.appendChild(newItem)   
    //console.log(addTotalPrice())
    //addTotalPrice()
    updateTotalPrice(productPrice);
    totalPriceSpan.textContent = totalPrice.toFixed(2)

    productNameInput.value = ''
    productPriceInput.value = ''

})

/*
// Function to handle the total sum of current items:
function addTotalPrice(){
       //return totalPrice += productPriceInput.value
        //totalPriceSpan.textContent = totalPrice.toFixed(2)
        totalPrice += Number(productPriceInput.value)
       // totalPriceSpan.textContent = totalPrice.toFixed(2)
}
*/


/////// REMOVING ITEMS AND DECREMENTALLY UPDATING THE TOTAL/////// 
// Re-rendering the list after each removed product item and corresponding price:
cart.addEventListener('click', (event) =>{
if (event.target.classList.contains('remove')) {
//event.target.parentElement.remove()
//subtractTotalPrice()
//console.log(subtractTotalPrice())
 removeItem(event)
    }
})

/*
// Function to handle the total after a product item is removed:
function subtractTotalPrice(price){
        //return totalPrice -= Number(productPriceInput.value)
        //return totalPrice -= Number(totalPrice.value)
        //return totalPrice = totalPrice - productPriceInput.value
         totalPrice -= price;
         
}
*/



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

