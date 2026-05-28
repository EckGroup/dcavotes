// script.js
document.getElementById('votingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop default submission redirect
    
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting Ballot...";

    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        alert('Thank you! Your vote has been recorded securely.');
        
        // 1. Reset the actual form data (clears radio buttons)
        form.reset();
        
        // 2. Remove the visual background highlight from the active card
        // This forces the browser to redraw the cards in their default unselected state
        document.activeElement.blur(); 
        
        // 3. Bring the submit button back to life for the next voter
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit Ballot";
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert('There was an issue submitting your vote. Please try again.');
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit Ballot";
    });
});
