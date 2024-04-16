var totalAmount = localStorage.getItem('totalAmount');

// Check if the total amount is not null or empty
if (totalAmount) {
  // Update the content of the element with the retrieved total amount
  document.getElementById('totalAmount').textContent = totalAmount;
} else {
  // If no total amount is found, show an error message or take appropriate action
  console.log('No total amount found in local storage.');
}

/* 
//name inuput in 1st page 
const userName = localStorage.getItem('userName');
const userNameElement = document.getElementById('userName');
userNameElement.textContent = userName;
*/





//name inuput form 1st page and if it empty pop up msg  
const userName = localStorage.getItem('userName');

// Check if the user name is not null or empty
if (userName) {
  const userNameElement = document.getElementById('userName');
  userNameElement.textContent = userName;
} else {
  // If no name is stored, show an error message
  alert('No name entered. Please go back and enter your name.');
  window.location.href = 'index.html'; 
  
}




//show which fields are filled in correctly or incorrectly


const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Reset error messages and styles
  nameError.innerText = '';
  emailError.innerText = '';
  messageError.innerText = '';

  // Check if name is filled in
  if (!nameInput.value.trim()) {
    nameError.innerText = 'Name is required';
  }

  // Check if email is filled in correctly
  if (!emailInput.checkValidity()) {
    emailError.innerText = 'Please enter a valid email address';
  }

  // Check if message is filled in
  if (!messageInput.value.trim()) {
    messageError.innerText = 'Message is required';
  }

  // If all fields are valid, proceed with form submission
  if (form.checkValidity()) {
    // You can perform additional actions here, such as submitting the form to the server
    alert('Form submitted successfully!');
  }
});



// getting check box imput to next page

