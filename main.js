const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');
 loginForm.addEventListener('submit', (event) => {
	event.preventDefault(); // Prevent default form submission
  
	// Simulate login (replace with actual authentication logic)
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
  
	if (username === '036' && password === '036') {
	  // Login successful, redirect to job postings page (replace with actual redirection)
	  window.location.href = 'homePage.html';
	} else {
	  loginMessage.textContent = 'Invalid username or password';
	}
  });