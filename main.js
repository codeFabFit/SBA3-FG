
// you need atleast 2 eventlistner to generate random quotes about motivation, love etc 
const quote =[ "The power is always within you", "It might be tough but your tougher", "If you can do the first 5 you can do the last 5", "Never be afraid to fail, only be afraid to quit", "everyday we have 24 hrs to make a difference for ourselves and our community", "you gotta get to the fame one way or another", "Never underestimate your talent"]
const generateButton = document.getElementById("generateButton");
// const quoteOutput = document.getElementById("quoteOutput");
generateButton.addEventListener("click", () => {
    // Element.preventDefault();
    const randomIndex = Math.floor(Math.random() * quote.length);
    const randomQuote = quote[randomIndex];
    quoteOutput.textContent = randomQuote;
    window.alert(randomQuote);
});

// must createElements from within 

// you need queryselector or ALL on h1 or p element

// one form form form validation 
function validationForm () {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!firstName || !lastName || !email || !password) {
        document.getElementById("error message").textContent = "Must complete all fields to proceed";
        Element.preventDefault()
        return false;
    }
    if (email.indexOf('@') === -1 && email.indexOf(".com") === -1) {
        document.getElementById("error-message").textContent = "Please enter a valid email addess";
        return false;
    }  Element.preventDefault(); {
  return true
    }}
    
    
    // window.alert("we recieved your information")
   
   


// appendchild remember the node and parents 

// remmeber to use textContent (just like on the lab get it so that when you click FQA you will be able to see that word of what they clicked)

// find a way to make style have an affect when they click somewhere on the page ex. dark mode

const themeButton = document.getElementById("theme");
const body = document.body;
themeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
})


// include an attribute 



// // BOM Property to include maybe do a history, concole is showing an error i dont understand
// const goBackButton = document.getElementById("goBack");
// const goForwardbutton = document.getElementById("goForward")

// goBackButton.addEventListener("click", () => {
//     window.history.back()
// });
// goForwardbutton.addEventListener("click", () => {
//     window.history.forward(); 
// });