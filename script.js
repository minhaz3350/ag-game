/* --- AG GAME SCRIPTS (script.js) --- */

function copyCA() {
    // 1. SETUP: Put your actual Contract Address inside the quotes below
    const contractAddress = "0xABCDEF1234567890ABCDEF1234567890ABCDEF12"; 
    
    // 2. LOGIC: Use the Clipboard API
    navigator.clipboard.writeText(contractAddress).then(() => {
        
        // 3. FEEDBACK: Show the user it worked
        const feedbackElement = document.getElementById("copy-feedback");
        feedbackElement.textContent = "✅ Address Copied to Clipboard!";
        feedbackElement.style.opacity = "1";

        // 4. RESET: Clear message after 2.5 seconds
        setTimeout(() => {
            feedbackElement.style.transition = "opacity 0.5s";
            feedbackElement.style.opacity = "0";
            // Wait for fade out to clear text
            setTimeout(() => { 
                feedbackElement.textContent = ""; 
                feedbackElement.style.transition = "none";
                feedbackElement.style.opacity = "1";
            }, 500); 
        }, 2500);

    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
