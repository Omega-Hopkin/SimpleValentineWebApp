document.getElementById("yes").addEventListener("click", function(event) {
    event.preventDefault(); //prevent page reload
    document.getElementById("responseInput").value = "Yes";

    fetch("https://formspree.io/f/xanqdklr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ response: "Yes" }) //send response
    }).then(() => {
        window.location.href = "index2.html"; //redirect
    }).catch(error => console.error("Erreur:", error));
});


document.getElementById('no').addEventListener('click', function(event) {
    event.preventDefault(); //prevent default button behavior

    //send "no" response only once (on first click)
    if (!this.dataset.responseSent) {
        fetch('https://formspree.io/f/xanqdklr', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ response: 'No' }) //send response
        }).catch(error => console.error('Erreur:', error));

        this.dataset.responseSent = 'true'; //mark that the response has been sent
    }

    //logic to change the "No" button text
    const messages = ["Are you sure?", "Pretty sure?", "Are you positive?", "Pookie please"];
    let index = parseInt(this.dataset.messageIndex || 0); //get the current index or 0 by default

    this.textContent = messages[index]; //display the current message
    index = (index + 1) % messages.length; //move to the next message
    this.dataset.messageIndex = index; //save the index for the next click
});
