const textArea = document.getElementById("textArea");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");

textArea.addEventListener("input", function() {
    let text = textArea.value;
    charCount.innerText = text.length;

    let words = text.trim().split(/\s+/);
    wordCount.innerText = text.length > 0 ? words.length : 0;

    if (text.length > 200) {
        alert("Character limit exceeded! (Max: 200)");
    }
});
