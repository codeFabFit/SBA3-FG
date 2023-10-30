
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

function addComment() {
  const newComment = cInput.value;

  if (newComment === "") return;

  cList.appendChild(document.createElement("li")).textContent = newComment;
  cInput.value = "";
  cInput.focus();
}

// Register the event listener.
cBtn.addEventListener("click", addComment);


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
//   return true
    }}
    

// // nav bar 

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId= link.getAttribute('href').substring(1);

        const targetSection= document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({behavior: 'smooth'});
        }
    });
}); 




navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        
        if (targetId === 'faq') {
            // If "FAQ" is clicked, create and append FAQ content
            const faqContent = document.createElement('div');
            faqContent.innerHTML = '<h1>FAQ</h1><p>This is the FAQ page content.</p>';
            faqContainer.innerHTML = 'FAQ'; 
            faqContainer.appendChild(faqContent);
        } else {
            window.display("Your doing a good job")
        }
    });
});

// you need queryselector or ALL on h1 or p element

    // Get all h1 elements
    const h1Elements = document.querySelectorAll('h1');
    const h1Container = document.getElementById('h1-container');

    // Create a new div to display the h1 content
    const h1ContentDiv = document.createElement('div');

    // Loop through h1 elements and append their content
    h1Elements.forEach((h1Element) => {
        const h1Text = h1Element.textContent;
        const h1Item = document.createElement('p');
        h1Item.textContent = h1Text;
        h1ContentDiv.appendChild(h1Item);
    });
   