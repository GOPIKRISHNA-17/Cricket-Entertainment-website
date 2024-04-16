// cart open n close

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//open cart

cartIcon.onclick = () => {
    cart.classList.add("active");
};

//close cart

closeCart .onclick = () => {
    cart.classList.remove("active");
};

//reset button
// Get the reset button element by its ID
var resetButton = document.getElementById('resetButton');

// Add an event listener to the button
resetButton.addEventListener('click', function() {
  // Reload the page
  window.location.reload();
});


//making add to cart
// cart working js
if(document.readyState == 'loading'){

    document.addEventListener("DOMContentLoaded",ready);

}else{
    ready();
}

//making function
function ready() {
    //remove item from cart
    var removeCartbuttons = document.getElementsByClassName('cart-remove');
    for (var i=0; i < removeCartbuttons.length; i++){
        var button = removeCartbuttons[i];
        button.addEventListener('click',removeCartitem);
    }
}
    //quantity change
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i=0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change',quantityChange);

}
//add to cart
var addCart = document.getElementsByClassName('add-cart');
for (var i=0; i <  addCart.length; i++){
    var button =  addCart[i];
    button.addEventListener('click',addCartClicked);
}

//remove cart item
function removeCartitem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//quantityChange
function quantityChange(event){
    var input= event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value =1;
    }
    updatetotal();
}


//quantity in cart
function updateCartIcon(){
    var cartBoxes=document.getElementsByClassName('cart-box');
    var quantity=0;

    for (var i=0; i<cartBoxes.length; i++){
        var cartBox= cartBoxes[i];
        var quantityElement=cartBox.getElementsByClassName('cart-quantity')[0];
        quantity+= parseInt(quantityElement.value);

    }
    var cartIcon=document.querySelector("#cart-icon");
    cartIcon.setAttribute("data-quantity",quantity);

}

//ADD TO CART FUNCTION
function addCartClicked(event){
    //activate checkout button 
    let checkoutElement = document.getElementById("checkout" );
    checkoutElement.disabled = false;

    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src
    addProductToCart(title,price,productImg);
    updatetotal();
    updateCartIcon();

}

function addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for(var i=0 ; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText==title){
            alert('You have already added this item to cart');
            return;
        }

    }
    if (cartBoxContent == '') { 

        let checkoutElement = document.getElementById("checkout" );
        checkoutElement.disabled = true;

    }
      var cartBoxContent =`
    <img src="${productImg}" alt="" class="cart-img" />
    <div class="deatil-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" name="" id="" value="1" class="cart-quantity"/>
    
    </div>
    
    
    
    <!--remove item-->
    <i class='bx bxs-trash-alt cart-remove' ></i>  `;
    
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0]
     .addEventListener('click',removeCartitem);
    cartShopBox.getElementsByClassName('cart-quantity')[0]
    .addEventListener('change', quantityChange)
    updateCartIcon()



}



var total = 0;

//total update
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    total = 0;
    for(var i =0; i< cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total += price * quantity;

     

        
    }
    total=Math.round(total*100)/100;
    document.getElementsByClassName('total-price')[0].innerText = "$" + total;

   //when no items in cart checkout disable
    if (total== 0){
        let checkoutElement = document.getElementById("checkout" );
        checkoutElement.disabled = true;}
 } 
 
 



 
 







 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //need to change
 
 
 /*var proceedToCheckoutBtn = document.getElementById('proceedToCheckoutBtn');
 proceedToCheckoutBtn.addEventListener('click', proceedToCheckout());

 // Proceed to Checkout function
 function proceedToCheckout() {
   var cartContent = document.getElementsByClassName('cart-content')[0];
   var cartBoxes = cartContent.getElementsByClassName('cart-box');
   
   if (cartBoxes.length === 0) {
     alert('Your cart is empty. Please add items before proceeding to checkout.');
     return;
   }

   // If there are items in the cart, proceed to the checkout page or other action.
   // Add your logic here to handle the checkout process.
   // For example, you could redirect the user to the checkout page.
   // window.location.href = 'checkout.html';
 }

  

*/




/* 

 //personal deatails need to change 

function validate(){
    var x = document.forms["form1"]["fullname"].value;
 
    var a = document.forms["form1"]["email"].value;
    
    if(x ==""){
        alert("Name section needs to be filled");
        return false;
    }
   
    if(a == ""){
        alert("Email section needs to be filled");
        return false;
    }
    
   
    
}
function validate2(frm){
    let fun =frm.fullname.value;
    let fun2 =frm.email.value;
    if (fun == '' && fun2==''){
        let checkoutElement = document.getElementById("checkout" );
        checkoutElement.disabled = false;
    }
}

*/



//if name and email is not entered giving alert 


// Get the form element using its name attribute
var myForm = document.forms['myForm'];

// Get the submit button from the header
var submitBtn = document.getElementById('checkout');

// Add an event listener to the form input elements
myForm.addEventListener('input', function() {
  // Check if any input fields are not filled
  var formElements = myForm.elements;
  var isFormValid = true;

  for (var i = 0; i < formElements.length; i++) {
    var element = formElements[i];

    // Check if the element is an input field and its value is empty or contains only whitespace
    if (element.nodeName === 'INPUT' && element.value.trim() === '') {
      isFormValid = false;
      break; // Stop the loop since we already found an empty input
    }
    
    
  }

  // Enable or disable the submit button based on the form validation
  submitBtn.disabled = !isFormValid;
});


// Add an event listener to the submit button in the header
submitBtn.addEventListener('click', function(event) {
   // Prevent the default button click behavior

  // Check if the form is valid
  if (!myForm.checkValidity()) {
    alert('Please enter your Name and E-mail.');
    event.preventDefault();
  } else { window.location.href = 'cancel.html'

  }
});





//getting infomatian to checkout page
/* 
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  window.location.href = `checkoutpage.html?name=${encodeURIComponent(name)}`;
});
*/

//getting customername infomatian to checkout page

/* 
const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const submitButton = document.getElementById('checkout');

    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      const name = nameInput.value;
      localStorage.setItem('userName', name);
      window.location.href = 'checkoutpage.html';
    }); */





//getting customername and total  to checkout page
//getting customername 

    const form = document.querySelector('form');
    const submitButton = document.getElementById('checkout');
    submitButton.addEventListener('click', function() {
        // Check if the form is valid
        if (!form.checkValidity()) {
            
        } else {
          // Get the name entered by the user
          const name = document.getElementById('name').value;
  
          // Store the name in local storage
          localStorage.setItem('userName', name);
  
          // Navigate to the other HTML page
          window.location.href = 'checkoutpage.html';
        }
      });


  // get total to another page 


  document.getElementById('checkout').addEventListener('click', function() {
    // Get the total amount from the element with class 'total-price'
    var totalAmount = document.querySelector('.total-price').innerText;

    // Store the total amount in local storage
    localStorage.setItem('totalAmount', totalAmount);
    
    // Navigate to the other HTML page
   

    
}); 




