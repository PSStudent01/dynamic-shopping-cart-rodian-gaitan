Please Note:
I had to include this file in my project because for some reason, the markup file is leaving out some of the data when pushed to GitHub


Reflection Questions:

1. How did you dynamically create and append new elements to the DOM?
Here JavaScript creates a new list items (<li>) whenever a user adds a product. First, it  reads the product name and price from the input fields. Then, it creates a new <li> element with document.createElement('li'); it adds the product information and a Remove button; and finally it stores the price using a data-price attribute. It then goes on to appending the new item to the cart using cart.appendChild(newItem). This allows each new product to appear dynamically in the list without reloading the page.

2. What steps did you take to ensure accurate updates to the total price?
Function updateTotalPrice(amount) adds or subtracts a given amount from a totalPrice variable and updates the total displayed in the DOM using totalPriceSpan.textContent. When a new product is added, it passes the product’s price to this function to increase the total. When a product is removed, it passes the negative of its stored data-price to decrease the total. This approach ensures the total always matches the items currently in the cart.

3. How did you handle invalid input for product name or price?
I used both HTML validation and JavaScript checks. The input fields now have required and min="0.01" attributes to prevent empty or negative values. In JavaScript, I also checked productNameInput.checkValidity() and productPriceInput.checkValidity() before adding the product. If the inputs are invalid, the code will prevent the user’s action and display an alert asking the user to enter valid data. This ensures only valid products are added to the cart.

4. What challenges did you face when implementing the remove functionality?
One challenge was ensuring the total price updates correctly when an item is removed. At first the code was able to remove the items from the <ul> rendered list, but was either NOT substracting from the total amount or if it did, it the result was incorrect. To solve this, I stored each product’s price in a data-price attribute so I could easily access it when the Remove button is clicked. I also used event delegation on the cart <ul> so that clicks on the dynamically created Remove buttons would be recognized. Finally, I used the updateTotalPrice function to subtract the removed item’s price before deleting the <li> from the DOM, ensuring the total stays accurate.
