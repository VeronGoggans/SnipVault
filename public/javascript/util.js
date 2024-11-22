// Function to clean a string of inline CSS
function removeInlineStyles(htmlString) {
    // Create a temporary container to parse the HTML string
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;

    // Remove all style attributes
    tempDiv.querySelectorAll('[style]').forEach(el => {
        el.removeAttribute('style');
    });

    // Return the cleaned HTML as a string
    return tempDiv.innerHTML;
}


// Function to handle paste event
export async function handlePaste(event) {
    // Prevent the default paste action
    event.preventDefault();

    // Access clipboard data
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('text/html') || clipboardData.getData('text/plain');

    // Clean the pasted data of inline styles
    const cleanedContent = removeInlineStyles(pastedData);

    // Insert cleaned content at the cursor position (if within a contenteditable div)
    document.execCommand('insertHTML', false, cleanedContent);
}

