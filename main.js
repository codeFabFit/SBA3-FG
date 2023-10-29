
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

const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");

// The function to handle adding new comments.
function addComment() {
  const newComment = cInput.value;

  // This wasn't in the instructions, but
  // we added a guard against empty comments:
  if (newComment === "") return;

  cList.appendChild(document.createElement("li")).textContent = newComment;
  cInput.value = "";
  cInput.focus();
}

// Register the event listener.
cBtn.addEventListener("click", addComment);

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



// include an attribute 



// // BOM Property to include maybe do a history, concole is showing an error i dont understand
