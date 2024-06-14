// App that reads over input text and reads aloud. Web browsers have a built-in feature that makes this easy on websites.

// function formatInput(user_input) {execution block}
// function parseInput(formatted) {execution block}
// function audioOutput(parsed) {execution block} 




// Train AIs to summarize content / information of a body of text for perusal of long documents.
// Go back and summarize academic performance to look for skill specific job opportunities.

// Get references to the DOM elements
const readButton = document.getElementById('read-button');
const content = document.getElementById('content');

// Check if the browser supports speech synthesis
if ('speechSynthesis' in window) {
    // Function to handle the speech synthesis
    const readContent = () => {
        // Get the text from the content div
        const text = content.innerText || content.textContent;
        if (text.trim() !== "") {
            // Create a new SpeechSynthesisUtterance object
            const utterance = new SpeechSynthesisUtterance(text);

            // Set some optional properties
            utterance.rate = 1; // Speed of the speech
            utterance.pitch = 1; // Pitch of the speech
            utterance.volume = 1; // Volume of the speech

            // Speak the text
            window.speechSynthesis.speak(utterance);
        }
    };

    // Add an event listener to the button to trigger the speech synthesis
    readButton.addEventListener('click', readContent);
} else {
    // If speech synthesis is not supported, show an alert
    alert('Sorry, your browser does not support speech synthesis.');
}