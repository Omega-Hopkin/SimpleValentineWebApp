//handle form submission
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); //prevent default form submission

    //get form values
    const name = document.querySelector('input[placeholder="Your name"]').value;
    const comment = document.getElementById('floatingTextarea2').value;

    //check if name and comment are filled in
    if (!name.trim() || !comment.trim()) {
        alert("Please fill in both your name and message.");
        return;
    }

    //send data to formspree via fetch
    fetch('https://formspree.io/f/******?no_redirect=1', { //<- put you formspree link here
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _name: name, comment: comment }) //add name
    })
    .then(response => {
        if (response.ok) {
            //show success alert
            document.getElementById('alertPlaceholder').innerHTML = `
                <div class="alert alert-success d-flex align-items-center" role="alert">
                    ✅ Response sent successfully!
                </div>
            `;

            //clear fields after sending
            document.querySelector('input[placeholder="Your name"]').value = '';
            document.getElementById('floatingTextarea2').value = '';

            //hide alert after 5 seconds
            setTimeout(() => {
                document.getElementById('alertPlaceholder').innerHTML = '';
            }, 5000);
        } else {
            throw new Error('Error sending the comment');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        //show error alert
        document.getElementById('alertPlaceholder').innerHTML = `
            <div class="alert alert-danger d-flex align-items-center" role="alert">
                ❌ An error occurred while sending the comment.
            </div>
        `;

        setTimeout(() => {
            document.getElementById('alertPlaceholder').innerHTML = '';
        }, 5000);
    });
});
